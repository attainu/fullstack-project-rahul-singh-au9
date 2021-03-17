const userModel = require("../models/userModel");
require("dotenv").config();
const Stripe = require("stripe");
// this will help us create a  log-in link with some parameters in the url
const stripe = Stripe(process.env.STRIPE_SECRET);
const queryString = require("query-string");



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

module.exports = {createStripeAccount, getAccountStatus, getAccountBalance}