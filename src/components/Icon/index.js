import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faHackerrank, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Icon(props) {

    const { links } = props;

    function iconName(id) {
        switch (id) {
            case 'link-1':
                return faLinkedin;
            case 'link-2':
                return faGithubSquare;
            case 'link-3':
                return faHackerrank;
            case 'link-4':
                return faStackOverflow;
        }
    }

    return (
        <div className='flex space-b wrap'>
            {links.map(link => (
                <span>
                    <a href={link.url} target='_blank' className='icon-link'>
                        <FontAwesomeIcon
                            className='icons'
                            key={link.id}
                            icon={iconName(link.id)}
                        />
                        <p className='link-name'>
                            {link.name}
                        </p>
                    </a>
                </span>
            ))}
        </div>
    );
}

export default Icon;