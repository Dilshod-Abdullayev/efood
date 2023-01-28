import React from 'react';
import ContactForm from './Contact__form';
import ContactText from './Contact__text';
import '../../assets/css/main.css'

const Contact = () => {
    return (
        <div className='contact'>
            <ContactText/>
            <ContactForm/>
        </div>
    );
}

export default Contact;
