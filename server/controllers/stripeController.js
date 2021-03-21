const userModel = require("../models/userModel");
const serviceModel = require("../models/serviceModel");
require("dotenv").config();
const Stripe = require("stripe");
// this will help us create a  log-in link with some parameters in the url
const stripe = Stripe(process.env.STRIPE_SECRET);
const queryString = require("query-string");


// CREATING STRIPE ACCOUNT
const createStripeAccount = async (req,res) => {
    // console.log("request user from auth middleware", req.user);
    // console.log("you hit createStripeAccount endpoint");

    try {
      //1. find user from DB
      const User = await userModel.findById(req.user.id).exec();
      console.log("User ===>" ,User)

      //2. if user doesn't have stripe_account_id yet, create now
      if (!User.stripe_account_id) {

        const account = await stripe.accounts.create({
          country: 'US',
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
        application_fee_amount: fee * 100,
        // this seller can see his balance in our frontend dashboard
        transfer_data: {
          destination: item.createdBy.stripe_account_id,
        },
      },

      // success and calcel urls
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    // 7 add this session object to user in the db
    await userModel.findByIdAndUpdate(req.user._id, { stripeSession: session }).exec();
    // 8 send session id as resposne to frontend
    res.send({
      sessionId: session.id,
  });

    } catch (error) {
        console.log(error)
    }

}
module.exports = {createStripeAccount, getAccountStatus, getAccountBalance, payoutSetting, stripeSessionId};