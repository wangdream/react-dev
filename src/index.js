import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Layout from './components/Layout/index';
import Detail from './components/details/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <React.StrictMode>
    <Route exact  path='/' component={Layout}></Route>
    <Route path='/details' component={Detail}></Route>
    {/* <Layout /> */}
  </React.StrictMode>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
