import React from 'react';
import styles from './NewContactForm.module.scss';
import {ContactInfo, ContactInfoType} from './ContactInfo/ContactInfo';
import {SectionHead} from '../common/sectionHead/SectionHead';
import {Resume} from '../myExpertises/resume/Resume';
import {Button} from '../common/button/Button';


export const NewContactForm = () => {
    const contactInfoState: Array<ContactInfoType> = [
        {
            type: 'phone',
            data: '(407) 867-9672',
            description: 'Call me'
        },
        {
            type: 'email',
            data: 'sergekupchik@gmail.com',
            description: 'Email me'
        },
        {
            type: 'address',
            data: 'Orlando, FL',
            description: 'Address'
        },
    ]
    return (
        <div className={styles.wrapper } id={'contact'}>
            <div className={styles.container}>
                <SectionHead description={'SAY HELLO'} title={'CONTACT'}/>
                <div className={styles.sectionInner}>
                    <div className={`${styles.box} ${styles.boxTop}`}>
                        <div className={styles.block1}>
                            <h5>Get in Touch</h5>
                        </div>
                        <div className={styles.block2}>
                            {contactInfoState.map((c, index) => {
                                return <ContactInfo type={c.type}
                                                    data={c.data}
                                                    description={c.description} key={index}/>
                            })}
                        </div>
                    </div>
                    {/*<div className={`${styles.box} ${styles.boxBottom}`}>*/}
                    {/*    <div className={styles.block1}>*/}
                    {/*        <h5>Contact Form</h5>*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.block3}>*/}
                    {/*        <form action=""><input type="email" id="email" name="name"*/}
                    {/*                               placeholder={'Your email'} className={styles.email}/>*/}
                    {/*            <input type="text" id={'name'} name="name" placeholder={'Your name'}*/}
                    {/*                   className={styles.name}/>*/}

                    {/*            <textarea id="message" name="message"*/}
                    {/*                      placeholder={'Your message...'}*/}
                    {/*                      className={styles.message}/>*/}
                    {/*            <input type="submit" value="Submit" className={styles.submit}/>*/}
                    {/*        </form>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>

        </div>
    );

}





