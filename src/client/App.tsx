import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './Components/HelloWorld';

const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

render(<App />, document.querySelector('#root'));