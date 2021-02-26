import React from 'react';
import styles from './MyExpertises.module.scss';
import { SectionHead } from '../common/sectionHead/SectionHead';
import {Resume} from './resume/Resume';




export const MyExpertises:React.FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <SectionHead description={"MY RESUME"} title={"MY EXPERTISES"}/>
                <div className={styles.sectionInner}>
                    <div className={`${styles.box} ${styles.boxTop}`}>
                        <div className={styles.block1}>
                            <h5>My Experience</h5>
                        </div>
                        <div className={styles.block2}>
                            <Resume description={"Collaborate with creative and development teams on the execution of ideasCollaborate with creative and development teams on the execution of ideasCollaborate with creative and development teams on the execution of ideasCollaborate with creative and development teams on the execution of ideasCollaborate with creative and development teams on the execution of ideasCollaborate with creative and development teams on the execution of ideas."} position={"Front-end Developer"} company={"Google Inc."} period={"2011.02 - 2013.09"}status={'New'}/>
                            <Resume description={"Collaborate with creative and development teams on the execution of ideasCollaborate with creative and development teams on the execution of ideasCollaborate with creative and development teams on the execution of ideasCollaborate with the execution of ideas."} position={"Front-end Developer"} company={"Google Inc."} period={"2011.02 - PRESENT"}/>

                        </div>
                    </div>
                    <div className={`${styles.box} ${styles.boxBottom}`}>
                        <div className={styles.block1}>
                            <h5>My Education
                            </h5>
                        </div>
                        <div className={styles.block2}>
                            <Resume position={"Master of Engineering"} company={"National Technical University (Belarus)"} period={"2009 - 2015"}status={'New'}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}


