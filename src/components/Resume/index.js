import React from 'react';
import icon1 from '../../assets/skill-icons/javascript.svg';
import icon2 from '../../assets/skill-icons/css.svg';
import icon3 from '../../assets/skill-icons/html-5.svg';
import icon4 from '../../assets/skill-icons/jquery.svg';
import icon5 from '../../assets/skill-icons/nodejs.svg';
import icon6 from '../../assets/skill-icons/express.svg';
import icon7 from '../../assets/skill-icons/handlebars.svg';
import icon8 from '../../assets/skill-icons/bootstrap.svg';
import icon9 from '../../assets/skill-icons/materializecss.svg';
import icon10 from '../../assets/skill-icons/bulma.svg';
import icon11 from '../../assets/skill-icons/sequelize.svg';
import icon12 from '../../assets/skill-icons/mongodb.svg';
import icon13 from '../../assets/skill-icons/mongoose.png';
import icon14 from '../../assets/skill-icons/jest.svg';
import icon15 from '../../assets/skill-icons/git-icon.svg';
import icon16 from '../../assets/skill-icons/webpack.svg';
import icon17 from '../../assets/skill-icons/react.svg';
import icon18 from '../../assets/skill-icons/mysql.svg';

function Resume() {
    const skills = [
        {
            name: 'Javascript',
            icon: icon1
        },
        {
            name: 'CSS',
            icon: icon2
        },
        {
            name: 'HTML',
            icon: icon3
        },
        {
            name: 'jQuery',
            icon: icon4
        },
        {
            name: 'React',
            icon: icon17
        },
        {
            name: 'Node',
            icon: icon5
        },
        {
            name: 'Express',
            icon: icon6
        },
        {
            name: 'Handlebars',
            icon: icon7
        },
        {
            name: 'Bootstrap',
            icon: icon8
        },
        {
            name: 'Materialize',
            icon: icon9
        },
        {
            name: 'Bulma',
            icon: icon10
        },
        {
            name: 'MySQL',
            icon: icon18
        },
        {
            name: 'Sequelize',
            icon: icon11
        },
        {
            name: 'MongoDB',
            icon: icon12
        },
        {
            name: 'Mongoose',
            icon: icon13
        },
        {
            name: 'Jest',
            icon: icon14
        },
        {
            name: 'Git',
            icon: icon15
        },
        {
            name: 'Webpack',
            icon: icon16
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
                        <img src={skill.icon} className='skill-icon' alt={`Icon for ${skill.name}`} />
                        <span className='skill-text'>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Resume;