import React from 'react';
import projects from '../../utils/projects';

function Project() {

    return (
        <div className='project-grid'>
            {projects.map((project) => (
                <div key={project.repo} className={`grid-item project-${project.id}`}>
                    {/* <a href={project.url} target='_blank' rel='noreferrer'> */}
                    <h2 className='project-title'>{project.title}</h2>
                    <div className='card-body'>
                        <div>
                            <img
                                src={project.image}
                                alt={(`Screenshot of ${project.title} App`)}
                                className='project-img'
                            />
                        </div>
                        {/* </a> */}
                        <div>
                            <p className='project-feature'>{project.features}</p>
                        </div>
                    </div>
                    <div className='repo-link-wrap'>
                        {project.type === 'back-end' ?
                            <a href={project.url} target='_blank' rel='noreferrer'>View Demo</a>
                            :
                            <a href={project.url} target='_blank' rel='noreferrer'>Visit App</a>
                        }
                        <a href={(`https://github.com/tchestnut85/${project.repo}`)} target='_blank' rel='noreferrer' className='project-repo'>GitHub Repo</a>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default Project;