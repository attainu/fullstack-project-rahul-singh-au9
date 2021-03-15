import { combineReducers } from "redux";

//all Reducers
import  serviceReducer from './reducers/Service.reducer'
import   currentServiceReducer from './reducers/CurrentService.reducer'


export default combineReducers({
  ServiceState:serviceReducer,
  currentServiceState: currentServiceReducer,

});