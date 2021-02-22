import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

function Contact() {

    const [emailCopied, setEmailCopied] = useState('');

    const copyEmail = () => {
        const email = document.getElementById('email');
        // const range = document.createRange();
        // range.selectNodeContents(email);
        // window.getSelection().addRange(range);

        // try {
        //     const success = document.execCommand('copy');
        //     const message = success ? 'Email Copied!' : "Email wasn't copied";
        //     console.log(message);
        // } catch (err) {
        //     console.error('Unable to copy email.', err);
        // }

        // window.getSelection().removeAllRanges();


        navigator.clipboard.writeText(email.textContent).then(() => {
            const message = 'Email Copied!';
            console.log(message);
        }).catch(error => {
            console.log('Email not copied:', error);
        });

        if (email) {
            setEmailCopied('Email Copied!');
        } else {
            setEmailCopied('');
        }
    };

    return (
        <section className='contact-me-section'>
            <h2 className='heading'>Contact Me</h2>
            <div>
                <div>
                    <h3 className='heading'>Email</h3>
                </div>
                <div className='content email-section'>Contact me at:
                    <div className='email'>
                        <a id='email' href="mailto:thomaschestnut00@gmail.com">thomaschestnut00@gmail.com</a>
                        <button className='email-btn'><FontAwesomeIcon onClick={copyEmail} icon={faCopy} /></button>
                    </div>
                </div>
                {emailCopied && (
                    <span className='email-message'>
                        {emailCopied}
                    </span>
                )}
                <div>
                    <h3 className='heading'>LinkedIn</h3>
                </div>
                <p className='content linkedin-section'>Connect with me on:
                    <a className='linkedin' href="https://www.linkedin.com/in/thomas-chestnut/" target='_blank' rel='noreferrer'>LinkedIn</a>
                </p>
            </div>
        </section>
    );
}

export default Contact;