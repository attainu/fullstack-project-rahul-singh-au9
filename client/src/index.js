import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store"
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom'

import { DataProvider} from './store/GlobalState'




ReactDOM.render(

  <DataProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </DataProvider>,
  document.getElementById("root"),
);