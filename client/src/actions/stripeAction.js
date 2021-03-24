// import {CREATE_STRIPE_ACCOUNT} from '../constants/actionTypes';
// import * as api from "../api/index.js";
// import { toast } from 'react-toastify';

// // CREATE_STRIPE_ACCOUNT ACTION
// export const createStripeAccount = (router) => async (dispatch) => {

//   try{

//     const {data} = await api.createStripeAccount()

//     dispatch({
//       type: CREATE_STRIPE_ACCOUNT,
//       payload: data
//     })

//     // router.push("/")
//   } catch(error){
//     console.log(error);
//     toast.error("Stripe Connect failed! Try later...")
//   }
// };


// export const getAccountStatus = (router) => async (dispatch) => {

//   try{

//     const {data} = await api.getAccountStatus()

//     dispatch({
//       type: CREATE_STRIPE_ACCOUNT,
//       data
//     })

//     // router.push("/")
//   } catch(error){
//     console.log(error);
//     toast.error("Stripe Connect failed! Try later...")
//   }
// };

import axios from "axios";

  // CREATE_STRIPE_ACCOUNT ACTION
export const createStripeAccount = async (token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/createStripeAccount`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  // ACCOUNT STATUS
export const getAccountStatus = async (token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/get-account-status`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  // ACCOUNT BALANCE
export const getAccountBalance = async (token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/get-account-balance`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  // CURRENCY FORMATTER
export const currencyFormatter = (data) => {
  return (data.amount/100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency,
  });
};


// PAYOUT SETTING
export const payoutSetting = async (token) =>
  await axios.post(
    `${process.env.REACT_APP_API}/payout-setting`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


// BOOKING GET STRIPE SESSION ID
export const getSesstionId = async (token, serviceId) =>
  await axios.post(
    `${process.env.REACT_APP_API}/stripe-session-id`,
    {
      serviceId
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


// STRIPE SUCCESS REQUEST
export const stripeSuccessRequest = async (token, serviceId) =>
    await axios.post(
      `${process.env.REACT_APP_API}/stripe-success`,{serviceId},
      {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      }
    )