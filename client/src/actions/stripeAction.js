import {CREATE_STRIPE_ACCOUNT} from '../constants/actionTypes';
import * as api from "../api/index.js";
import { toast } from 'react-toastify';

// CREATE_STRIPE_ACCOUNT ACTION
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


export const getAccountStatus = (router) => async (dispatch) => {

  try{

    const {data} = await api.getAccountStatus()

    dispatch({
      type: CREATE_STRIPE_ACCOUNT,
      data
    })

    // router.push("/")
  } catch(error){
    console.log(error);
    toast.error("Stripe Connect failed! Try later...")
  }
};

