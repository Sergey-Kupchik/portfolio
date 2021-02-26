import React from 'react';
import styles from './Footer.module.css';
import {
    AiOutlineGithub,
    AiFillLinkedin,
    AiFillFacebook,
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
            <a href=""><AiOutlineGithub size={"1.3rem"} color={"white"}/></a>
            <a href=""> <AiFillLinkedin size={"1.3rem"} color={"white"}/></a>
            <a href=""><AiFillFacebook size={"1.3rem"} color={"white"}/></a>
        </div>
            <p>2021 | All Right Reserved</p>
    </div>
}