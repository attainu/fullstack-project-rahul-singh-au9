import { combineReducers } from "redux";

//all Reducers
import  serviceReducer from './reducers/Service.reducer'
import   currentServiceReducer from './reducers/CurrentService.reducer'
import  productReducer from './reducers/Products.reducer'
import   currentProductReducer from './reducers/CurrentProduct.reducer'


export default combineReducers({
  ServiceState:serviceReducer,
  currentServiceState: currentServiceReducer,
  ProductState:productReducer,
  currentProductState: currentProductReducer,

});