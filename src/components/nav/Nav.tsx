import React from 'react';
import styles from './Nav.module.scss';

type NavPropsType = {}

export const Nav = (props: NavPropsType) => {
    return (
        <div className={styles.nav}>
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">SKILLS</a>
            <a href="">PROJECTS</a>
            <a href="">CONTACT</a>
        </div>
    );
}


