import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;