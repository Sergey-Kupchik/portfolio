import React, {useState} from 'react';
import {Nav} from '../nav/Nav';
import styles from './Header.module.css';
import {BurgerNav} from '../BurgerNav/BurgerNav';


type HeaderPropsType = {
}




export const Header = (props: HeaderPropsType) => {

    return (
        <div className={styles.header}>
            <div className={styles.avatarDetails}><h1>
                SK
            </h1></div>
            <Nav/>
            <BurgerNav/>

        </div>
    );
}


