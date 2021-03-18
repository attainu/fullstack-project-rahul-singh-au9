import Navbar from '../src/components/Navbar'

import { Switch,Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import ServiceDeatail from './pages/ServiceDeatail';
import BookingPage from './pages/BookingPage';

import '../src/components/FormInput/style.scss'
import './default.scss'
import Error from './components/Error';
import ProductsPage from './pages/ProductsPage';



function App() {
  return (
    <div className="App" style={{width:"100%"}} >
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:productId" component={ServiceDeatail} />
        <Route exact path="/services/:serviceId" component={ServiceDeatail} />
        <Route exact path="/services/:serviceId/book" component={BookingPage} />
        <Route exact path="/error" component={Error} />

      </Switch>

      




    </div>
  );
}

export default App;
