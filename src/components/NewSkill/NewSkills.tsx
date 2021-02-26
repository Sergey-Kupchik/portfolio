import React from 'react';
import styles from './NewSkills.module.scss';
import {SectionHead} from '../common/sectionHead/SectionHead';
import {SkillNew} from './SkillNew/SkillNew';


export const NewSkills:React.FunctionComponent = () => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <SectionHead description={"MY SKILL SET"} title={"MY QUALIFICATIONS"}/>
                <div className={styles.sectionInner}>
                    <div className={`${styles.box} ${styles.boxTop}`}>
                        <div className={styles.block1}>
                            <h5>My Skills</h5>
                        </div>
                        <div className={styles.block2}>
                           <SkillNew name={"HTML"} progress={40}/>
                           <SkillNew name={"JS"} progress={80}/>
                           <SkillNew name={"JS"} progress={80}/>
                           <SkillNew name={"JS"} progress={80}/>
                           <SkillNew name={"JS"} progress={80}/>
                           <SkillNew name={"JS"} progress={80}/>
                           <SkillNew name={"JS"} progress={80}/>
                           <SkillNew name={"JS"} progress={80}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}



