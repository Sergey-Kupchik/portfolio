import React, {FormEvent, useState} from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactUs.module.scss';
import Preloader from '../../common/image/Preloader.gif';
import {DiVim} from 'react-icons/all';
import {NewContactFormPropsType} from '../NewContactForm';



export default function ContactUs(props: NewContactFormPropsType) {
    function sendEmail(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.setPreloader(true)
        // @ts-ignore
        emailjs.sendForm('service_gtsu5c6', 'template_piexz0c', e.target,
            'user_AopmWbAxt55tMqUFEvu0j')
            .then((result) => {
                props.setPreloader(false)
            }, (error) => {alert(error)
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number"/>
            <label>Name</label>
            <input type="text" name="user_name"
                   placeholder={'Your name'}
                   className={styles.name}/>
            <label>Email</label>
            <input type="email" name="user_email" className={styles.email}
                   placeholder={'Your email'}/>
            <label>Message</label>
            <textarea name="message"
                      placeholder={'Your message'}
                      className={styles.message}/>
            <input type="submit" value="Send" className={styles.submit}/>
        </form>
    );
}

