import React from 'react';
import styles from './Skill.module.css';


export type SkillType = {
    name: string;
    logo: string;
    description: string;
}

export const Skill: React.FC<SkillType> = (props) => {
    return (
        <div className={styles.skillContainer}>
            <div className={styles.skillLogo}>
                <img src={props.logo} alt={`Logo of ${props.name}`}/>
            </div>
            <div className={styles.skillInfo}>
                <h3>{props.name}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    );
}


