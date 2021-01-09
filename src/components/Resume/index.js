import React from 'react';

function Resume() {
    const skills = [
        {
            name: 'Javascript',
            file: 'javascript.svg'
        },
        {
            name: 'CSS',
            file: 'css.svg'
        },
        {
            name: 'HTML',
            file: 'html-5.svg'
        },
        {
            name: 'jQuery',
            file: 'jquery.svg'
        },
        {
            name: 'React',

            file: 'react.svg'
        },
        {
            name: 'Node',
            file: 'nodejs.svg'
        },
        {
            name: 'Express',
            file: 'express.svg'
        },
        {
            name: 'Handlebars',
            file: 'handlebars.svg'
        },
        {
            name: 'Bootstrap',
            file: 'bootstrap.svg'
        },
        {
            name: 'Materialize',
            file: 'materializecss.svg'
        },
        {
            name: 'Bulma',
            file: 'bulma.svg'
        },
        {
            name: 'MySQL',
            file: 'mysql.svg'
        },
        {
            name: 'Sequelize',
            file: 'sequelize.svg'
        },
        {
            name: 'MongoDB',
            file: 'mongodb.svg'
        },
        {
            name: 'Mongoose',
            file: 'mongoose.png'
        },
        {
            name: 'Jest',
            file: 'jest.svg'
        },
        {
            name: 'Git',
            file: 'git-icon.svg'
        },
        {
            name: 'Webpack',
            file: 'webpack.svg'
        }
    ];

    return (
        <section className='resume-section'>
            <div>
                <h2 className='heading'>Resume</h2>
            </div>
            <p className='content resume-text'>View or download my full resume
                <a className='resume-link' href='https://drive.google.com/file/d/1M4PNYrAi1U5XrBmbfFSP-DXe4pLXNSMs/view?usp=sharing' target='_blank' rel='noopener noreferrer'>here.</a>
            </p>
            <h3 className='heading'>My Skills</h3>
            <div className='icon-list'>
                {skills.map((skill) => (
                    <div key={skill.name} className='skill-div flex space-b'>
                        <img src={require(`../../assets/skill-icons/${skill.file}`).default} className='skill-icon' alt={`Icon for ${skill.name}`} />
                        <span className='skill-text'>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Resume;