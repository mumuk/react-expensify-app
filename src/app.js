import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import 'normalize.css/normalize.css';

import './styles/styles.scss';
import {Provider} from "react-redux";
import "react-dates/lib/css/_datepicker.css"
import 'react-dates/initialize';
import "./firebase/firebase";

const store = configureStore();


const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));



