import { SET_PRODUCTS, TOGGLE_PRODUCT_FETCHING_STATE } from "../actionTypes";

const initialState = {
  products: null,
  isProductsFetching: false
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload }; // [{}]
    case TOGGLE_PRODUCT_FETCHING_STATE:
      return { ...state, isProductsFetching: !state.isProductsFetching };
    default:
      return state;
  }
};

export default productsReducer;