import React from 'react';
import styles from './Nav.module.css';

type NavPropsType = {}

export const Nav = (props: NavPropsType) => {
    return (
        <div className={styles.nav}>
            <a href="">About me</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
    );
}


