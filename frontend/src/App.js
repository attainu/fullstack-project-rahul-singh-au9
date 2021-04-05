import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import './App.css';


import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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



import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import BookingPage from './components/BookingPage/BookingPage';
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>

          <Route exact path='/' component={Home}/>
                    {/* <Route exact path='/auth' component={Auth}/> */}
                    <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
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
                    <Route exact path='/confirm-booking/:serviceId' component={BookingPage}/>

          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/products' component={HomeScreen} exact />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
