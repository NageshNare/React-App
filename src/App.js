import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
