import React from 'react';
import logo from './logo.svg';
import './App.css';
 
import {BrowserRouter} from 'react-router-dom'
import PLP from './components/PLP';


function App() {
  return (
    <div className="App">
    
      <BrowserRouter> 
        <PLP />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
