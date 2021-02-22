import React from 'react';
import {Nav} from '../nav/Nav';
import styles from './Header.module.css';


type HeaderPropsType = {}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={styles.header}>
            <div className={styles.avatarDetails}><h1>
               SK
            </h1></div>
            <Nav/>
        </div>
    );
}


