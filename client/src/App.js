import React from 'react';
import './App.css';
import { Router, Redirect } from '@reach/router';
import TransactionState from './Context/Transaction/TransactionState';

import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <TransactionState>
        <Router>
          <Main path='/'/>
          <Redirect from='/' to='/' noThrow />
        </Router>
      </TransactionState>
    </div>
  );
}

export default App;
