import React, {FormEvent} from 'react';
import {useFormik} from 'formik';
import emailjs from 'emailjs-com';
import styles from './SendForm.module.scss';

export const SendForm: React.FunctionComponent = () => {


    function sendEmail(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // @ts-ignore
        emailjs.sendForm('service_gtsu5c6', 'template_piexz0c', e.target,
            'user_AopmWbAxt55tMqUFEvu0j')
            .then((result) => {
                debugger
                console.log(result.text);
            }, (error) => {
                debugger
                console.log(error.text);
            });
    }

    const validate = (values: ValuesType) => {
        //@ts-ignore
        const errors: ErrorType = {};
        if (!values.name) {
            errors.name = 'Name is required';
        } else if (values.name.length > 20) {
            errors.name = 'Must be 20 characters or less';
        }

        if (!values.message) {
            errors.message = 'Message is required';
        } else if (values.message.length < 1) {
            errors.message = 'Message is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        }, validate,
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    });

    return <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        {formik.errors.email && formik.touched.email ?
            <div style={{color: 'red', fontSize: '12px'}}><p>{formik.errors.email}</p></div> : null}
        <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={styles.email}
            placeholder={'Your email'}
        />
        {formik.errors.name && formik.touched.name ?
            <div style={{color: 'red', fontSize: '12px'}}><br/><p>{formik.errors.name}</p></div> : null}
        <label htmlFor="name">Your name</label>
        <input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder={'Your name'}
            className={styles.name}
        />


        <label htmlFor="message">Your message</label>
        {formik.errors.message && formik.touched.message ?
            <div style={{color: 'red', fontSize: '12px'}}><p>{formik.errors.message}</p></div> : null}
        <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder={'Your message'}
            className={styles.message}
        />
        <div style={{background: '#c51244 !important', padding: '10px !important', borderRight:"0 !important", position:"relative"}}></div>
        <button type="submit" className={styles.submit}>Submit</button>
    </form>
}


type ValuesType = {
    name: string
    email: string
    message: string
}
type ErrorsType = {} | ErrorType
type ErrorType = {
    name: null | string
    email: null | string
    message: null | string
}