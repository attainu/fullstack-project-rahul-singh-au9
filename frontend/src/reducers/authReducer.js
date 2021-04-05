import {AUTH, LOGOUT} from "../constants/actionTypes";

// on page refresh we are getting the data from local storage and putting it into redux storage so data will not be lost on page refresh
let authData;
if(localStorage.getItem("profile")){
  authData = JSON.parse(localStorage.getItem("profile"));
} else{
  authData = null
}

const authReducer = (state= authData, action) => {

  switch (action.type) {
    case AUTH:

      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };


    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };

    default:
      return state;
  }

};

export default authReducer;