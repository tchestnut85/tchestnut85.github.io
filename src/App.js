import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [sections] = useState([
    {
      id: '1',
      name: 'About',
    },
    {
      id: '2',
      name: 'Portfolio',
    },
    {
      id: '3',
      name: 'Contact',
    },
    {
      id: '4',
      name: 'Resume',
    }
  ]);

  const [currentSection, setCurrentSection] = useState('About');

  function renderPage() {
    switch (currentSection) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <div className='app-container'>
      <div className='content-wrap'>
        <Header
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        >
        </Header>
        <main>
          {renderPage(currentSection)}
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;