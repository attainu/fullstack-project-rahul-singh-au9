import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Container} from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './components/User/Dashboard';
import Profile from './components/User/Profile/Profile';
import UserDashboard from './components/User/Dashboard/UserDashboard';
import SellerDashboard from './components/User/Dashboard/SellerDashboard';

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Navbar/>
                <ToastContainer position='top-center'/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/auth' component={Auth}/>
                    <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
                    <ProtectedRoute exact path='/profile' component={Profile}/>
                    <ProtectedRoute exact path='/userDashboard' component={UserDashboard}/>
                    <ProtectedRoute exact path='/sellerDashboard' component={SellerDashboard}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
