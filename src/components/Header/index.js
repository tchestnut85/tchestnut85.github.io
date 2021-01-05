import React from 'react';
import Nav from '../Nav';

function Header(props) {

    const { sections, currentSection, setCurrentSection } = props;

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