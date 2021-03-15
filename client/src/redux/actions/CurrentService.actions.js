import {
    SET_CURRENT_SERVICE,
    TOGGLE_CURRENT_SERVICE_FETCHING_STATE,
  } from "../actionTypes";
  import axios from "axios";
  import config from '../../config'
  require('dotenv').config();
;
  
  export const fetchVideo = serviceId => async dispatch => {
    try {
      dispatch({ type: TOGGLE_CURRENT_SERVICE_FETCHING_STATE });
      const { data } = await axios(
        `${config.BASE_URL}/${serviceId}`
      );
      console.log(data);
      dispatch({ type: SET_CURRENT_SERVICE, payload: data });
    } catch (err) {
      console.error(err);
    } finally {
      dispatch({ type: TOGGLE_CURRENT_SERVICE_FETCHING_STATE });
    }
  };