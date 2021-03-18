import {
    SET_CURRENT_PRODUCT,
    TOGGLE_CURRENT_PRODUCT_FETCHING_STATE
  } from "../actionTypes";
  
  const initialState = {
    product: null,
    isFetchingCurrentProduct: false,
  };
  
  const currentProductReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case SET_CURRENT_PRODUCT:
        return { ...state, service: payload };
      case TOGGLE_CURRENT_PRODUCT_FETCHING_STATE:
        return {
          ...state,
          isFetchingCurrentProduct: !state.isFetchingCurrentProduct
        };
      default:
        return state;
    }
  };
  
  export default currentProductReducer;
  