import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './components/store';

import Departments from './components/Departments';
import Stats from './components/Stats';

const App = () => {
  return <div>
    <h1>Acme Employees And Departments</h1>
    <Stats />
    <Departments />
  </div>
}

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));