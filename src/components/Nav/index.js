import React from 'react';

function Nav(props) {

    const {
        sections,
        currentSection,
        setCurrentSection
    } = props;

    return (
        <nav className='navbar'>
            <h1 className='my-name'>
                Tom Chestnut
            </h1>
            <ul className='flex space-a'>
                {sections.map((section) => (
                    <li key={section.name}
                        className={currentSection === section.name ? 'active list' : 'list'}>
                        <span
                            className={currentSection === section.name ? '' : 'list-hover'}
                            onClick={() => setCurrentSection(section.name)}
                        >{section.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;