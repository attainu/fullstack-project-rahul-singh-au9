import { SET_PRODUCTS, TOGGLE_PRODUCT_FETCHING_STATE } from "../actionTypes";
import axios from "axios";
import config from '../../config'
require('dotenv').config();

export const fetchProducts = () => async dispatch => {
  try {
    dispatch({ type: SET_PRODUCTS, payload: null });
    dispatch({ type: TOGGLE_PRODUCT_FETCHING_STATE });
    const { data } = await axios(
      `${config.BASE_PROD_URL}`
    );
    console.log(process.env.BASE_URL);
    dispatch({ type: SET_PRODUCTS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: SET_PRODUCTS, payload: { items: [] } });
  } finally {
    dispatch({ type: TOGGLE_PRODUCT_FETCHING_STATE });
  }
};


export const createProducts = products => async (dispatch, getState) => {
  // const accessToken = getState().userState.user.access_token;
  try {
    dispatch({ type: TOGGLE_PRODUCT_FETCHING_STATE });
    const { data } = await axios.post(
      `${config.BASE_PRODPOST_URL}`,
    
      {
        headers: {
          // Authorization: `Bearer ${accessToken}`,
          Accept: "application/json"
        }
      }
    );
    const productObj = getState().ProductState.products;
    console.log(data);
    productObj.items.push(data);
    dispatch({ type: SET_PRODUCTS, payload: { ...productObj } });
  } catch (err) {
    console.error(err);
    // alert(err.response.data.error.message);
    // dispatch({ type: SET_VIDEOS, payload: { items: [] } });
  } finally {
    dispatch({ type: TOGGLE_PRODUCT_FETCHING_STATE });
  }
};
