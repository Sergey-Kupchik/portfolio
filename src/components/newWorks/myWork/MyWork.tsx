import React from 'react';
import styles from './MyWork.module.scss';


export type MyWorkType = {
    name: string
    logo: string
    description: string
    tech: string
    link: string
}

export const MyWork: React.FC<MyWorkType> = (props) => {
    const divStyle = {
        backgroundImage: 'url(' + props.logo + ')',


};

    return (
        <div className={styles.myWorkContainer}>
            <div className={styles.myWorkLogo} style={divStyle}>
                <a href={props.link} target="_blank">View code</a>
            </div>
            <div className={styles.myWorkInfo}>
                <h5>{props.name}</h5>
                <span>{props.description}</span>
                <span>{props.tech}</span>
            </div>
        </div>
    );
}


