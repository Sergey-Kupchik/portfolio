import React from 'react';
import styles from './Main.module.scss';
import buttonStyle from './../common/button/Button.module.scss';
import userPhoto from '../common/image/user.jpg';
import {Button} from '../common/button/Button';
import {ScrollDown} from './scrollDown/scrollDown';

type MainPropsType = {}

export const Main = (props: MainPropsType) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <img className={styles.mainPhoto}
                     src={userPhoto}/>
                <div className={styles.mainInfo}>
                    <h5>HI THERE !</h5>
                    <h1>I'M <span>SERGEY KUPCHIK</span></h1>
                    <p>Passionate designer & developer who loves simplicity
                        in things and crafts beautiful user interfaces with love.</p>
                    <div className={styles.mainInfoButtons}><Button text={'Hire Me'} href={''}/>
                        <a target="_blank" href="https://linkedin.com/"
                           className={`${buttonStyle.btn} ${styles.btnLink}`}>Download CV</a>
                    </div>
                </div>
            </div>
            <ScrollDown/>
        </div>
    );
}


