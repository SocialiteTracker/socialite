import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter ,BrowserRouter as Switch, Route } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Profile from './Components/Profile';
import './style.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

render(<App />, document.querySelector('#root'));