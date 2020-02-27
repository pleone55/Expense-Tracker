import React from 'react';
import './App.css';
import { Router, Redirect } from '@reach/router';

import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/'/>
        <Redirect from='/' to='/' noThrow />
      </Router>
    </div>
  );
}

export default App;
