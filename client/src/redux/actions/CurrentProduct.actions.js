import {
    SET_CURRENT_PRODUCT,
    TOGGLE_CURRENT_PRODUCT_FETCHING_STATE,
  } from "../actionTypes";
  import axios from "axios";
  import config from '../../config'
  require('dotenv').config();
;
  
  export const fetchVideo = productId => async dispatch => {
    try {
      dispatch({ type: TOGGLE_CURRENT_PRODUCT_FETCHING_STATE });
      const { data } = await axios(
        `${config.BASE_PROD_URL}/${productId}`
      );
      console.log(data);
      dispatch({ type: SET_CURRENT_PRODUCT, payload: data });
    } catch (err) {
      console.error(err);
    } finally {
      dispatch({ type: TOGGLE_CURRENT_PRODUCT_FETCHING_STATE });
    }
  };