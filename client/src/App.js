import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './components/User/Dashboard';
import Profile from './components/User/Profile/Profile';
import StripeCallback from './components/User/Stripe/StripeCallback';
import NewService from './components/Services/NewService/NewService';
import EditService from './components/Services/EditService/EditService';
import ViewService from './components/Services/ViewService/ViewService';
import ServicesHome from './components/Services/ServicesHome/Home';
import ElectriansAndAC from './components/Services/optionService/Electricians/ElectriansAndAC'
import Men from './components/Services/optionService/Men/Men';
import Women from './components/Services/optionService/Women/Women';
import CleaningAndPest from './components/Services/optionService/Cleaning/CleaningAndPest';
import PlumbCarpPaint from './components/Services/optionService/PCP/PlumbCarpPaint';
import StripeSuccess from './components/User/Stripe/StripeSuccess';
import StripeCancel from './components/User/Stripe/StripeCancel';
import SearchResults from './components/Services/SearchResults/SearchResults';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <ToastContainer position='top-center'/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/auth' component={Auth}/>
                    <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
                    <ProtectedRoute exact path='/profile' component={Profile}/>
                    <ProtectedRoute exact path='/stripe/callback' component={StripeCallback}/>
                    <ProtectedRoute exact path='/services/new' component={NewService}/>
                    <ProtectedRoute exact path='/service/edit/:serviceId' component={EditService}/>
                    <Route exact path='/services' component={ServicesHome}/>
                    <Route exact path='/service/:serviceId' component={ViewService}/>
                    <Route exact path='/services/Electrians&AC' component={ElectriansAndAC}/>
                    <Route exact path='/services/Men' component={Men}/>
                    <Route exact path='/services/Women' component={Women}/>
                    <Route exact path='/services/CleaningAndPest' component={CleaningAndPest}/>
                    <Route exact path='/services/PlumbCarpPaint' component={PlumbCarpPaint}/>
                    <ProtectedRoute exact path='/stripe/success/:serviceId' component={StripeSuccess}/>
                    <ProtectedRoute exact path='/service/cancel' component={StripeCancel}/>
                    <Route exact path='/search-results' component={SearchResults}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
