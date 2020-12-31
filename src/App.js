import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
