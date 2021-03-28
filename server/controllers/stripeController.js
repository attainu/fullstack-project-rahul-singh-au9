const userModel = require("../models/userModel");
const serviceModel = require("../models/serviceModel");
const orderModel = require("../models/orderModel");
require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET);
// this will help us create a  log-in link with some parameters in the url
const queryString = require("query-string");


// CREATING STRIPE ACCOUNT
const createStripeAccount = async (req,res) => {
    // console.log("request user from auth middleware", req.user);
    // console.log("you hit createStripeAccount endpoint");

    try {
      //1. find user from DB
      const User = await userModel.findById(req.user.id).exec();
      // console.log("User ===>" ,User)

      //2. if user doesn't have stripe_account_id yet, create now
      if (!User.stripe_account_id) {

          const account = await stripe.accounts.create({
            country: 'SE',
            type: "express",
          })
          // console.log("ACCOUNT ===>", account)
          User.stripe_account_id = account.id
          User.save();
      };

      // 3. create login link based on account id (for frontend to complete onboarding)
        let accountLink = await stripe.accountLinks.create({
            account: User.stripe_account_id,
            refresh_url: process.env.STRIPE_REDIRECT_URL,
            return_url: process.env.STRIPE_REDIRECT_URL,
            type: "account_onboarding",
        });

        // console.log(accountLink)


      // prefill any info such as email
        accountLink = Object.assign(accountLink, {
            "stripe_user[email]": User.email || undefined,
        });

      // console.log("ACCOUNT LINK", accountLink);

        let link = `${accountLink.url}?${queryString.stringify(accountLink)}`;
        // console.log("LOGIN LINK", link);
        res.send(link);

      // 4. update payment schedule (optional. default is 2 days

    } catch (error) {
      res.status(500).send("Something went wrong!");
    }
}


// STRIPE ACCOUNT STATUS
const getAccountStatus = async (req, res) => {
    try {
        //1. find user from DB
        const User = await userModel.findById(req.user.id).exec();
        const account = await stripe.accounts.retrieve(User.stripe_account_id)
        // console.log("ACCOUNT ==========>",account)

        const updatedUser = await userModel.findByIdAndUpdate(User._id,{ stripe_seller: account},{new: true})
        .select("-password").exec();
        // console.log("UPDATED USER ===>", updatedUser)

        res.json(updatedUser)

    } catch(error){
      console.log(error)
    }
}


// STRIPE ACCOUNT BALANCE
const getAccountBalance = async (req, res) => {
    //1. find user from DB
    const User = await userModel.findById(req.user.id).exec();

    try {
        const balance = await stripe.balance.retrieve({
          stripeAccount: User.stripe_account_id
        });
        // console.log("BALANCE ===>", balance)
        res.json(balance)
    } catch(error){
        console.log(error);
    }
}


// STRIPE ACCOUNT PAYOUT SETTINGS
const payoutSetting = async (req, res) => {
    //1. find user from DB
    const User = await userModel.findById(req.user.id).exec();

    try {
      const loginLink = await stripe.accounts.createLoginLink(User.stripe_account_id,{
          redirect_url: process.env.STRIPE_SETTING_REDIRECT_URL
      })
      // console.log("LOG-IN LINK PAYOUT SETTINGS ====>", loginLink)
      res.json(loginLink)
    } catch (error) {
        console.log("PAYOUT SETTINGS ERROR ====>",error)

    }
}

// STRIPE SESSION-ID
const stripeSessionId = async (req, res) => {

    // console.log("you hit stripe session id", req.body.serviceId);

    // 1 get hotel id from req.body
    const { serviceId } = req.body;

    try {

    // 2 find the service based on service id from db
    const item = await serviceModel.findById(serviceId).exec();
    // console.log(item)
    // console.log(item.createdBy)

    const stripeSeller = await userModel.find({email: item.createdBy})
    // console.log(stripeSeller)
    // console.log(stripeSeller[0].stripe_account_id)
    const stripeSellerId = stripeSeller[0].stripe_account_id;

    // 3 20% charge as application fee
    const fee = (item.price * 20) / 100;

    // 4 create a session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      // 5 purchasing item details, it will be shown to user on checkout
      line_items: [
        {
          name: item.title,
          amount: item.price * 100, // in cents
          currency: "usd",
          quantity: 1,
        },
      ],

      // 6 create payment intent with application fee and destination charge 80%
      payment_intent_data: {
          // application_fee_amount: fee * 100,
          // this seller can see his balance in our frontend dashboard
          transfer_data: {
            destination: stripeSellerId,
          },
      },
      // success and calcel urls
      success_url: `${process.env.STRIPE_SUCCESS_URL}/${item._id}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    // 7 add this session object to user in the db
    await userModel.findByIdAndUpdate(req.user.id, { stripeSession: session }).exec();

    // 8 send session id as resposne to frontend
    // console.log(req.user.id)
    res.send({
        sessionId: session.id,
  });

    } catch (error) {
        console.log(error)
    }
}


const stripeSuccess = async (req, res) => {
    // console.log("you hit the stripe success url");

    // 1. get the serviceId from body
    const {serviceId} = req.body;

    try {
    // 2. find currently logged-in user
    const user = await userModel.findById(req.user.id).exec();
    // console.log(req.user)
    // console.log(user)

    // 3. retrieve stripeSession
    const session = await stripe.checkout.sessions.retrieve(user.stripeSession.id)

    // check if the user has stirpeSession
    if(!user.stripeSession) return;

    // 4. if session payment status is paid , create order
    if(session.payment_status === "paid") {
      // 5. check if order with that sessin id already exist by querying orders collection
      const orderExist = await orderModel.findOne({"session.id": session.id}).exec();
      if(orderExist) {
        //  6. if order exist, send success true
        res.json({success: true});
      } else{
        // 7. else create new order and send success true
        let newOrder = await new orderModel({
            Service: serviceId,
            session,
            orderedBy: user._id
        }).save();

        // 8. remove user's stripeSession
        await userModel.findByIdAndUpdate(user.id, {
          $set: {stripeSession: {}}
        });
        res.json({success: true});
      }
    }
    } catch (error) {
      console.log("STIPE SUCCESS ERROR ===>", error);
    }
}

module.exports = {createStripeAccount, getAccountStatus, getAccountBalance, payoutSetting, stripeSessionId, stripeSuccess};