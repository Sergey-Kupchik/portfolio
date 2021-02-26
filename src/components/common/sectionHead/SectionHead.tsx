
import React from 'react';
import styles from './SectionHead.module.scss';


type SectionHeadType = {
    title: String
    description: String

}

export const SectionHead:React.FunctionComponent<SectionHeadType> = (props) => {
    return (
    <div className={styles.sectionHead}>
        <span>{props.description}</span>
        <h2>{props.title}</h2>
    </div>
    );
}