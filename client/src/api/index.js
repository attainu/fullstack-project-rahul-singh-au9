import axios from "axios";

const API = axios.create({baseURL: "https://urban-services.herokuapp.com"});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

// SIGN-UP
export const signUp = (formData) => API.post("/user/signup", formData);

// SIGN-IN
export const signIn = (formData) => API.post("/user/signin", formData);

// CREATE_STRIPE_ACCOUNT
export const createStripeAccount = () => API.post("/createStripeAccount",{});

// GET ACCOUNT STATUS
export const getAccountStatus = () => API.post("/get-account-status", {});