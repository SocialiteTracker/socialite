import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter ,BrowserRouter as Switch, Route } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import './style.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

render(<App />, document.querySelector('#root'));