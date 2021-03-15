import {
    SET_CURRENT_SERVICE,
    TOGGLE_CURRENT_SERVICE_FETCHING_STATE
  } from "../actionTypes";
  
  const initialState = {
    service: null,
    isFetchingCurrentService: false,
    comments: null
  };
  
  const currentServiceReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case SET_CURRENT_SERVICE:
        return { ...state, service: payload };
      case TOGGLE_CURRENT_SERVICE_FETCHING_STATE:
        return {
          ...state,
          isFetchingCurrentService: !state.isFetchingCurrentService
        };
      default:
        return state;
    }
  };
  
  export default currentServiceReducer;
  