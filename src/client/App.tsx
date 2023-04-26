import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, BrowserRouter as Switch, Route } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Profile from './Components/Profile';
import ShareProfile from './Components/ShareProfile';
import UserInfo from './Components/UserInfo';
import './style.css';

const App = () => {
  return (
    <div className='bg-lightpurple font-serif'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/shareprofile" component={ShareProfile} />
          <Route path="/userinfo/:username" component={UserInfo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

render(<App />, document.querySelector('#root'));