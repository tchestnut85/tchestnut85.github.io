import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faHackerrank, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

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
            default:
                return faLaptop;
        }
    }

    return (
        <div className='flex centered wrap'>
            {links.map(link => (
                <span key={(`${link.icon}-span`)}>
                    <a href={link.url} target='_blank' rel='noreferrer' className='icon-link link'>
                        <FontAwesomeIcon
                            className='icons'
                            key={(`${link.icon}-icon`)}
                            icon={iconName(link.id)}
                        />
                    </a>
                </span>
            ))}
        </div>
    );
}

export default Icon;