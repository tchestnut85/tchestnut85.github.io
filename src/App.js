import React, { useState } from 'react';
import './index.css';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [sections] = useState([
    {
      name: 'About',
    },
    {
      name: 'Portfolio',
    },
    {
      name: 'Contact',
    },
    {
      name: 'Resume',
    }
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Nav
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      >
      </Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
