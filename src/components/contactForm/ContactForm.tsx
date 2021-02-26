import React from 'react';
import styles from './ContactForm.module.scss';
import {ContactInfo, ContactInfoType} from './ContactInfo/ContactInfo';


export const ContactForm = () => {
    const contactInfoState: Array<ContactInfoType> = [
        {
            type: 'phone',
            data: '(407) 867-9672',
            description: 'Call me'
        },
        {
            type: 'email',
            data: 'kupchikrabota@gmail.com',
            description: 'Email me'
        },
        {
            type: 'address',
            data: 'Orlando, FL 32829',
            description: 'Address'
        },
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.head}>
                    <h2>Contact</h2>
                </div>
                <div className={styles.details}>
                    <h5>Get in Touch</h5>
                    <div className={styles.detailList}>
                        {contactInfoState.map((c, index) => {
                            return <ContactInfo type={c.type}
                                                data={c.data}
                                                description={c.description} key={index}/>
                        })}
                    </div>
                </div>
                <div className={styles.contactForm}>
                    <h5>Contact Form</h5>
                    <form action="">
                        <div className={styles.userInfoForm}>
                            <input type="text" id={'name'} name="name" placeholder={'Your name'}
                                   className={styles.name}/>
                            <input type="email" id="email" name="name"
                                   placeholder={'Your email'} className={styles.email}/>
                        </div>
                        <textarea id="message" name="message"
                               placeholder={'Your message...'}
                               className={styles.message}/>
                        <input type="submit" value="Submit" className={styles.submit}/>
                    </form>
                </div>
            </div>
        </div>
    );

}


// //
// <div className={styles.title}>
//     // <h2>My skills</h2>
//     // </div>
// //
// <div className={styles.skillsList}>
//     // {mySkillsState.map(s => {
// //         // return <Skill name={s.name} logo={s.logo} description={s.description}/>
// //     })}
// // </div>