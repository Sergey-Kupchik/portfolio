import styles from './scrollDown.module.scss';
import React from 'react';

export const ScrollDown = () => {
    return (
        <div className={styles.mouseWrap}>
        <div className={styles.mouse}></div>
        <p>Scroll Down</p>
    </div>
    );
}


