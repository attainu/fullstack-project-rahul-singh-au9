import axios from "axios";

const API = axios.create({baseURL: "http://localhost:3001"});

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
