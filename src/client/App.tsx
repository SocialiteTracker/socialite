import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './Components/HelloWorld';
import Login from './Components/Authentication/Login'

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
}

render(<App />, document.querySelector('#root'));