import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Container} from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar/>
                <ToastContainer position="top-center"/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;