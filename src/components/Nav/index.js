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
                <a href='/' className='my-name'>Tom Chestnut</a>
            </h1>
            <ul className='flex space-a'>
                {sections.map((section) => (
                    <li key={section.name} className={currentSection === section.name ? 'active list' : 'list'}>
                        <span
                            onClick={() => setCurrentSection(section.name)}
                        >{section.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;