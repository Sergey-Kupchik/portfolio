import React from 'react';
import styles from './MyWork.module.css';


export type MyWorkType = {
    name: string
    logo: string
    description: string
    link: string
}

export const MyWork: React.FC<MyWorkType> = (props) => {
    return (
        <div className={styles.myWorkContainer}>
            <div className={styles.myWorkLogo}>
                <a href={props.link} target="_blank">{props.name}</a>
            </div>
            <div className={styles.myWorkInfo}>
                <h3>{props.name}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    );
}


