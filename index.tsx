import React from 'react';
import { render } from 'react-dom';
import Loader from './components/Loader';
import './style.css';

const App = () => {
  return (
    <Loader/>
  );
};

render(<App />, document.getElementById('root'));
