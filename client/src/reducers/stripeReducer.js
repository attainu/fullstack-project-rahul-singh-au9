import {CREATE_STRIPE_ACCOUNT} from "../constants/actionTypes";

const stripeReducer = (state = null, action) => {

    switch(action.type) {
      case CREATE_STRIPE_ACCOUNT:
        return action.payload;

    default:
      return state;
    }

}

export default stripeReducer;