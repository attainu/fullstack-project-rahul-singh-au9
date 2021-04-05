import React from 'react';
import {Route} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { Redirect } from 'react-router';

const ProtectedRoute = ({...rest}) => {

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return userInfo? <Route {...rest} /> : <Redirect to='/login'/>
}

export default ProtectedRoute;
