import React from 'react';

function Nav(props) {

    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props;

    console.log(sections);

    return (
        <header className='flex space-a'>
            <h1>
                <a href='/' className='my-name'>Tom Chestnut</a>
            </h1>
            <nav>
                <ul className='flex space-b'>
                    {sections.map((section) => (
                        <li key={section.name} className='list'>
                            <span onClick={() => setCurrentSection(section)}>{section.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header >
    );
}

export default Nav;