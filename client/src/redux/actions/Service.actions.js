import { SET_SERVICES, TOGGLE_SERVICE_FETCHING_STATE } from "../actionTypes";
import axios from "axios";
import config from '../../config'
require('dotenv').config();

export const fetchTrendingVideos = () => async dispatch => {
  try {
    dispatch({ type: SET_SERVICES, payload: null });
    dispatch({ type: TOGGLE_SERVICE_FETCHING_STATE });
    const { data } = await axios(
      `${config.BASE_URL}`
    );
    console.log(process.env.BASE_URL);
    dispatch({ type: SET_SERVICES, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: SET_SERVICES, payload: { items: [] } });
  } finally {
    dispatch({ type: TOGGLE_SERVICE_FETCHING_STATE });
  }
};
