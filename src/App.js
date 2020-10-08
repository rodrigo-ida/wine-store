import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';

import Raiz from './container/raiz/Raiz'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Raiz />
      </div>
    </BrowserRouter>
  );
}

export default App;
