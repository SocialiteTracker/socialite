import React from 'react';
import { render } from 'react-dom';
import Login from './Components/Authentication/Login'
import './style.css';

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
}

render(<App />, document.querySelector('#root'));