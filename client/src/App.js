<<<<<<< HEAD
import Navbar from '../src/components/Navbar'

import { Switch,Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import ServiceDeatail from './pages/ServiceDeatail';
import BookingPage from './pages/BookingPage';

import '../src/components/FormInput/style.scss'
import './default.scss'
import Error from './components/Error';
import ProductsPage from './pages/ProductsPage';
import ProductsManager from './pages/ProductsAdd';



function App() {
  return (
    <div className="App" style={{width:"100%"}} >
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/addProduct" component={ProductsManager} />
        <Route exact path="/products/:productId" component={ServiceDeatail} />
        <Route exact path="/services/:serviceId" component={ServiceDeatail} />
        <Route exact path="/services/:serviceId/book" component={BookingPage} />
        <Route exact path="/error" component={Error} />

      </Switch>

      




    </div>
  );
}

export default App;
=======
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
>>>>>>> origin/rahul
