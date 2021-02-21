import React from 'react';

function Contact() {

    return (
        <section className='contact-me-section'>
            <h2 className='heading'>Contact Me</h2>
            <div>
                <div>
                    <h3 className='heading'>Email</h3>
                </div>
                <p className='content email-section'>Contact me at:
                    <a className='email' href="mailto:thomaschestnut00@gmail.com">thomaschestnut00@gmail.com</a>
                </p>
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