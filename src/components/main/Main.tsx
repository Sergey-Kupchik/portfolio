import React from 'react';
import styles from './Main.module.css';

type MainPropsType = {}

export const Main = (props: MainPropsType) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.mainInfo}>
                    <span>I'm</span>
                    <h1>Sergey Kupchik</h1>
                    <p>Creative Front End Web Developer</p>
                </div>
                <img className={styles.mainPhoto}
                     src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"/>
            </div>
        </div>
    );
}


