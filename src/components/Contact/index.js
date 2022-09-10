import React, { useState } from 'react';
import { isValidEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = isValidEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`)
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleBlank(e) {
        if (e.target.name === "Name" || e.target.name === "Message") {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    return (
        <section>
            <div>
                <h1>Contact Me</h1>
            </div>
            <div>
                <form id='contact-form'>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' defaultValue={name} onBlur={handleBlank} name='Name' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email Address:</label>
                        <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
                    </div>
                    <div>
                        <label htmlFor='message'>Message:</label>
                        <textarea name='Message' defaultValue={message} onBlur={handleBlank} rows='5' />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;