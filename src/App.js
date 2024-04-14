import React from 'react';
import './App.css';
import Convert from './component/Convert';
import Footer from './component/Footer';
function App() {
  return (
    <div>
    {/* <div style={{
      backgroundImage: `url(${Image})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%,100%', backgroundSize: 'contain',backgroundPosition: 'center',height: '90vh',width: '100vw'}}> */} 
      <header>
        <h1 className="text-center mx-3">Currency Converter</h1>
      </header>
      <Convert/>
      <Footer/>
    </div>
  );
}

export default App;
