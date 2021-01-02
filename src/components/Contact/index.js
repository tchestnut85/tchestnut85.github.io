import React, { useState } from 'react';
import validateEmail from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function messageChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Please enter a valid email.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function messageSubmit(e) {
        e.preventDefault();
        console.log(formState);
        // TODO: the rest of this function will be completed in the future with back-end additions
    }

    return (
        <section>
            <h2 className='heading'>Contact Me</h2>
            <form id="contact-form" className='contact-section' onSubmit={messageSubmit}>
                <div className='form-input'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={messageChange}></input>
                </div>
                <div className='form-input'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={messageChange}></input>
                </div>
                <div className=''>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='10' defaultValue={message} onBlur={messageChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Send</button>
            </form>
        </section>
    );
}

export default Contact;