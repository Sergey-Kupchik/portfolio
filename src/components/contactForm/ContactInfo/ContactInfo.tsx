import React from 'react';
import styles from './ContactInfo.module.scss';
import {FaWhatsapp} from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineCompass } from "react-icons/ai";

export type ContactInfoType = {
    type: 'phone' | 'email' | 'address';
    data: string;
    description: string;
}




export const ContactInfo: React.FC<ContactInfoType> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                {props.type == 'phone' && <FaWhatsapp className={styles.icon} size={'2.1rem'}/>}
                {props.type == 'email' && <AiOutlineMail className={styles.icon} size={'2.1rem'}/>}
                {props.type == 'address' && <AiOutlineCompass className={styles.icon} size={'2.1rem'}/>}

            </div>
            <div className={styles.info}>
                <h5>{props.data}</h5>
                <span>{props.description}</span>
            </div>
        </div>
    );
}


