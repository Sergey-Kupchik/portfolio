import React from 'react';
import styles from './SkillNew.module.scss';


export type SkillType = {
    name: string;
    progress: number
}

export const SkillNew: React.FC<SkillType> = (props) => {
    const progressClass =props.progress
    return (

        <div className={styles.fadeInUp}>
            <h5>{props.name}</h5>
            <div className={styles.progress}>
                <div className={styles.progressBar}></div>
            </div>
        </div>

    );
}