import React, { useState } from 'react';
import Nav from '../Nav';

function Header() {

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

    const [currentSection, setCurrentSection] = useState(sections[0]);

    return (
        <header>
            <Nav
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            >
            </Nav>
        </header>
    );
}

export default Header;