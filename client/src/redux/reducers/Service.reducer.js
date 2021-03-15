import { SET_SERVICES, TOGGLE_SERVICE_FETCHING_STATE } from "../actionTypes";

const initialState = {
  services: null,
  isServicesFetching: false
};

const serviceReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SERVICES:
      return { ...state, services: payload }; // [{}]
    case TOGGLE_SERVICE_FETCHING_STATE:
      return { ...state, isServicesFetching: !state.isServicesFetching };
    default:
      return state;
  }
};

export default serviceReducer;
