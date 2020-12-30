import React from 'react';

function Nav(props) {

    const {
        sections,
        currentSection,
        setCurrentSection
    } = props;

    return (
        <nav className='navbar'>
            <h1>
                <a href='/' className='my-name'><span>Tom</span><span>Chestnut</span></a>
            </h1>
            <ul className='flex space-a'>
                {sections.map((section) => (
                    <li key={section.id} className='list'>
                        <span onClick={() => setCurrentSection(section)}>{section.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;