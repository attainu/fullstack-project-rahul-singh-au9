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
          type: "express",
        })
        console.log("ACCOUNT ===>", account)
        User.stripe_account_id = account.id
        User.save();
      };

      // 3. create login link based on account id (for frontend to complete onboarding)
      console.log(User?.stripe_account_id)
      let accountLink = await stripe.accountLinks.create({
        account: `${User.stripe_account_id}`,
        refresh_url: "http://localhost:3000/stripe/callback",
        return_url: "http://localhost:3000/stripe/callback",
        type: "account_onboarding",
      });

      console.log(accountLink)

      // prefill any info such as email
      accountLink = Object.assign(accountLink, {
        "stripe_user[email]": User.email || undefined,
      });

      // console.log("ACCOUNT LINK", accountLink);

      let link = `${accountLink.url}?${queryString.stringify(accountLink)}`;
      console.log("LOGIN LINK", link);
      res.send(link);

      // 4. update payment schedule (optional. default is 2 days

    } catch (error) {
      res.status(500).send("Something went wrong!");
    }
}

module.exports = createStripeAccount