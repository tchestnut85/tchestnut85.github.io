import React from 'react';
import photo1 from '../../assets/images/pass-the-page.png';
import photo2 from '../../assets/images/AniGame.png';
import photo3 from '../../assets/images/code-zone.png';
import photo4 from '../../assets/images/social-network.png';
import photo5 from '../../assets/images/team-builder.png';
import photo6 from '../../assets/images/weather-dashboard.png';

function Project() {

    const projects = [
        {
            id: '1',
            title: 'Pass the Page',
            url: 'https://passthepage.herokuapp.com/',
            repo: 'pass-the-page',
            image: photo1,
            features: 'Full Stack, MVC, MySQL, RESTful API'
        },
        {
            id: '2',
            title: 'AniGame',
            url: 'https://cfsylvester.github.io/AniGame/',
            repo: 'AniGame',
            image: photo2,
            features: 'Front-End, AJAX, APIs, Bulma'
        },
        {
            id: '3',
            title: 'Code Zone',
            url: 'https://code-zone.herokuapp.com/',
            repo: 'code-zone',
            image: photo3,
            features: 'Full Stack, MVC, MySQL, RESTful API'
        },
        {
            id: '4',
            title: 'Social Network Backend',
            url: 'http://bit.ly/social-tc',
            repo: 'social-network',
            image: photo4,
            features: 'Back-End, MongoDB, RESTful API'
        },
        {
            id: '5',
            title: 'Team Builder',
            url: 'http://bit.ly/teambuilder-tc',
            repo: 'team-builder',
            image: photo5,
            features: 'Back-End, Node.js, Inquirer.js'
        },
        {
            id: '6',
            title: 'Weather Dashboard',
            url: 'http://bit.ly/weatherapp-tc',
            repo: 'weather-dashboard',
            image: photo6,
            features: 'Front-End, AJAX, Bootstrap'
        }
    ];

    return (
        <div className='project-grid'>
            {projects.map((project) => (
                <div key={project.repo} className={`grid-item project-${project.id}`}>
                    <a href={project.url} target='_blank' rel='noreferrer'>
                        <h3 className='project-title'>{project.title}</h3>
                        <img
                            src={project.image}
                            alt={(`Screenshot of ${project.title} App`)}
                            className='project-img'
                        />
                    </a>
                    <p className='project-feature'>{project.features}</p>
                    <a href={(`https://github.com/tchestnut85/${project.repo}`)} target='_blank' rel='noreferrer' className='project-feature'>GitHub Repo</a>
                </div>
            ))}
        </div >
    );
}

export default Project;