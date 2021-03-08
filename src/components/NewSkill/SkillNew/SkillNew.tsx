import React from 'react';
import styles from './SkillNew.module.scss';
import { Fade } from "react-awesome-reveal";

export type SkillType = {
    name: string;
    progress: number
}

export const SkillNew: React.FC<SkillType> = (props) => {
   const name = props.name
    return (

            <div className={styles.fadeInUp}>
                <Fade>
                    <h5>{name}</h5>
                    <div className={styles.progress}>
                        <div className={styles.progressBar}></div>
                    </div>
                </Fade>

            </div>


    );
}