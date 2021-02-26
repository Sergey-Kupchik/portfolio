import React from 'react';
import styles from './Resume.module.scss';

type ResumePropsType = {
    company: string
    position: string
    description?: string
    period: string
    status?: "New"


}

export const Resume: React.FunctionComponent<ResumePropsType> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>{props.company}</div>
            <div className={`${props.description ? styles.body : styles.bodyShort}`}>
                <h5>{props.position}</h5>
                <p>{props.description}</p>
            </div>
            <div className={styles.footer }><h6 className={`${props.status ? styles.footerFirst : styles.footerSecond}`}>{props.period}</h6></div>
        </div>)
}