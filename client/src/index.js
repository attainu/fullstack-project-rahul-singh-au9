import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
<<<<<<< HEAD
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
=======
import "./index.css";
import store from "./store/store"
import App from "./App";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> origin/rahul
