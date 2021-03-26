import React from 'react';
import {Route} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { Redirect } from 'react-router';

const ProtectedRoute = ({...rest}) => {

  const {auth} = useSelector((state) =>({...state}));

  return auth && auth.token ? <Route {...rest} /> : <Redirect to='/auth'/>
}

export default ProtectedRoute;
