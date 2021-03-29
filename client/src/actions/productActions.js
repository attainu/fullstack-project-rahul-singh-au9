import axios from "axios";


// CREATE A NEW SERVICE
export const createProduct= async (token, data) =>
  await axios.post(
    `${process.env.REACT_APP_API}/create-product`,
    data
  );


// GET ALL THE SERVICES
export const allProducts = async () => await axios.get(`${process.env.REACT_APP_API}/products`);


// GET SINGLE THE SERVICE
export const singleProduct = async (productId) => await axios.get(`${process.env.REACT_APP_API}/product/${productId}`);


// USER PRODUCT BOOKINGS
export const userProductBookings = async (token) =>
  await axios.get(
    `${process.env.REACT_APP_API}/user-product-bookings`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
