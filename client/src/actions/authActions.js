import {AUTH} from "../constants/actionTypes";
import * as api from "../api/index.js";
import { toast } from 'react-toastify';

// SIGN-UP ACTION
export const signup = (formData, router) => async (dispatch) => {

  try{

    const {data} = await api.signUp(formData)

    dispatch({
      type: AUTH,
      data
    })

    router.push("/")
    toast.success("Registered Successfully")

  } catch(error){
    console.log(error);
    toast.error(error.response.data)
  }
};

// SIGN-IN USER
export const signin = (formData, router) => async (dispatch) => {

  try{

    const { data } = await api.signIn(formData)

    dispatch({
      type: AUTH,
      data
    })

    router.push("/")
    toast.success("Logged-In Successfully")

  } catch(error){
    console.log(error)
    toast.error(error.response.data)
  }
};

// update user in local storage
export const updateUserInLocalStorage = (result, next) => {

  if (window.localStorage.getItem("profile")) {
    let auth = JSON.parse(localStorage.getItem("profile"));
    auth.result = result;
    localStorage.setItem("profile", JSON.stringify(auth));
    next();
  }

};