import { combineReducers } from 'redux';
import authReducer from './authReducer';
import stripeReducer from './stripeReducer';

export default combineReducers({
  auth: authReducer,
  stripe: stripeReducer
});
