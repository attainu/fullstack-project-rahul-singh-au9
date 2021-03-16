import {CREATE_STRIPE_ACCOUNT} from '../constants/actionTypes';
import * as api from "../api/index.js";
import { toast } from 'react-toastify';

// SIGN-UP ACTION
export const createStripeAccount = (router) => async (dispatch) => {

  try{

    const {data} = await api.createStripeAccount()

    dispatch({
      type: CREATE_STRIPE_ACCOUNT,
      payload: data
    })

    // router.push("/")
  } catch(error){
    console.log(error);
    toast.error("Stripe Connect failed! Try later...")
  }
};