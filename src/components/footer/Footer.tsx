import React from 'react';
import styles from './Footer.module.scss';
import {
    AiOutlineGithub,
    AiFillLinkedin,
} from 'react-icons/ai';


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <NavFooter/>
        </div>
    );
}


const NavFooter = () => {
    return <div className={styles.wrapper}>
        <div className={styles.nav}>
            <a target="_blank" href="https://github.com/Sergey-Kupchik"><AiOutlineGithub/></a>
            <a target="_blank" href="https://www.linkedin.com/in/sergei-kupchyk-04b735182/"> <AiFillLinkedin/></a>
        </div>
            <p>2021 | All Right Reserved</p>
    </div>
}