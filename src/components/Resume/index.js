import React from 'react';

function Resume() {
    const skills = [
        {
            name: 'Javascript',
            file: 'javascript.svg',
            type: 'front-end'
        },
        {
            name: 'HTML',
            file: 'html-5.svg',
            type: 'front-end'
        },
        {
            name: 'CSS',
            file: 'css.svg',
            type: 'front-end'
        },
        {
            name: 'jQuery',
            file: 'jquery.svg',
            type: 'front-end'
        },
        {
            name: 'React',
            file: 'react.svg',
            type: 'front-end'
        },
        {
            name: 'Node',
            file: 'nodejs.svg',
            type: 'back-end'
        },
        {
            name: 'Express',
            file: 'expressjs.svg',
            type: 'back-end'
        },
        {
            name: 'Handlebars',
            file: 'handlebars.svg',
            type: 'front-end'
        },
        {
            name: 'Bootstrap',
            file: 'bootstrap.svg',
            type: 'front-end'
        },
        {
            name: 'Materialize',
            file: 'materializecss.svg',
            type: 'front-end'
        },
        {
            name: 'Bulma',
            file: 'bulma.svg',
            type: 'front-end'
        },
        {
            name: 'MySQL',
            file: 'mysql.svg',
            type: 'back-end'
        },
        {
            name: 'Sequelize',
            file: 'sequelize.svg',
            type: 'back-end'
        },
        {
            name: 'MongoDB',
            file: 'mongodb.svg',
            type: 'back-end'
        },
        {
            name: 'Mongoose',
            file: 'mongoose.png',
            type: 'back-end'
        },
        {
            name: 'Jest',
            file: 'jest.svg',
            type: 'back-end'
        },
        {
            name: 'Git',
            file: 'git-icon.svg',
            type: 'back-end'
        },
        {
            name: 'Webpack',
            file: 'webpack.svg',
            type: 'back-end'
        }
    ];

    const frontends = skills.filter(skill => skill.type === 'front-end');
    const backends = skills.filter(skill => skill.type === 'back-end');

    return (
        <section className='resume-section'>
            <div>
                <h2 className='heading'>Resume</h2>
            </div>
            <p className='content resume-text'>View or download my full resume
                <a className='resume-link' href='https://drive.google.com/file/d/1M4PNYrAi1U5XrBmbfFSP-DXe4pLXNSMs/view?usp=sharing' target='_blank' rel='noopener noreferrer'>here.</a>
            </p>
            <h3 className='heading'>Front-End Skills</h3>
            <div className='icon-list'>
                {frontends.map((skill) => (
                    <div key={skill.name} className='skill-div flex space-b'>
                        <img src={require(`../../assets/skill-icons/${skill.file}`).default} className='skill-icon' alt={`Icon for ${skill.name}`} />
                        <span className='skill-text'>{skill.name}</span>
                    </div>
                ))}
            </div>
            <h3 className='heading'>Back-End Skills</h3>
            <div className='icon-list'>
                {backends.map((skill) => (
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