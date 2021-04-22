import React from 'react';
import styles from './NewContactForm.module.scss';
import {ContactInfo, ContactInfoType} from './ContactInfo/ContactInfo';
import {SectionHead} from '../common/sectionHead/SectionHead';
import {Resume} from '../myExpertises/resume/Resume';
import {Button} from '../common/button/Button';
import {SendForm} from './Form/SendForm';
import ContactUs from './ContactUs/ContactUs';

export type NewContactFormPropsType={
    setPreloader:(preloaderCondition:boolean)=>void
}
export const NewContactForm = (props: NewContactFormPropsType) => {
    const contactInfoState: Array<ContactInfoType> = [
        {
            type: 'phone',
            data: '(407) 867-9672',
            description: 'Call me'
        },
        {
            type: 'email',
            data: 'sk40786796@gmail.com',
            description: 'Email me'
        },
        {
            type: 'address',
            data: 'Orlando, FL',
            description: 'Address'
        },
    ]
    return (
        <div className={`${styles.wrapper} ${styles.wrapper2}`} id={'contact'}>
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
                    <div className={`${styles.box} ${styles.boxBottom}`}>
                        <div className={styles.block1}>
                            <h5>Contact Form</h5>
                        </div>
                        <div className={styles.block3}>
                            <ContactUs setPreloader={props.setPreloader}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );

}





