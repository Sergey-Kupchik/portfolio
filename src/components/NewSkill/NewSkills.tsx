import React from 'react';
import styles from './NewSkills.module.scss';
import skilStyle from './SkillNew/SkillNew.module.scss';
import {SectionHead} from '../common/sectionHead/SectionHead';
import {SkillNew} from './SkillNew/SkillNew';
import {Fade} from 'react-awesome-reveal';


export const NewSkills:React.FunctionComponent = () => {


    return (
        <div className={styles.wrapper} id={'skills'}>
            <div className={styles.container}>
                <SectionHead description={"MY SKILL SET"} title={"MY QUALIFICATIONS"}/>
                <div className={styles.sectionInner}>
                    <div className={`${styles.box} ${styles.boxTop}`}>
                        <div className={styles.block1}>
                            <h5>My Skills</h5>
                        </div>
                        <div className={styles.block2}>
                            <div className={skilStyle.fadeInUp}>
                                <Fade>
                                    <h5>React</h5>
                                    <div className={skilStyle.progress}>
                                        <div className={`${skilStyle.progressBar} ${skilStyle.react}`}></div>
                                    </div>
                                </Fade>
                            </div>

                            <div className={skilStyle.fadeInUp}>
                                <Fade>
                                    <h5>Redux</h5>
                                    <div className={skilStyle.progress}>
                                        <div className={`${skilStyle.progressBar} ${skilStyle.redux}`}></div>
                                    </div>
                                </Fade>
                            </div>
                            <div className={skilStyle.fadeInUp}>
                                <Fade>
                                    <h5>SASS/CSS</h5>
                                    <div className={skilStyle.progress}>
                                        <div className={`${skilStyle.progressBar} ${skilStyle.SASS}`}></div>
                                    </div>
                                </Fade>
                            </div>
                            <div className={skilStyle.fadeInUp}>
                                <Fade>
                                    <h5>TypeScript</h5>
                                    <div className={skilStyle.progress}>
                                        <div className={`${skilStyle.progressBar} ${skilStyle.TypeScript}`}></div>
                                    </div>
                                </Fade>
                            </div>
                            <div className={skilStyle.fadeInUp}>
                                <Fade>
                                    <h5>JavaScript</h5>
                                    <div className={skilStyle.progress}>
                                        <div className={`${skilStyle.progressBar} ${skilStyle.JavaScript}`}></div>
                                    </div>
                                </Fade>
                            </div>
                            <div className={skilStyle.fadeInUp}>
                                <Fade>
                                    <h5>Jest</h5>
                                    <div className={skilStyle.progress}>
                                        <div className={`${skilStyle.progressBar} ${skilStyle.Jest}`}></div>
                                    </div>
                                </Fade>
                            </div>                            <div className={skilStyle.fadeInUp}>
                            <Fade>
                                <h5>HTML</h5>
                                <div className={skilStyle.progress}>
                                    <div className={`${skilStyle.progressBar} ${skilStyle.HTML}`}></div>
                                </div>
                            </Fade>
                        </div>                            <div className={skilStyle.fadeInUp}>
                            <Fade>
                                <h5>Ajax</h5>
                                <div className={skilStyle.progress}>
                                    <div className={`${skilStyle.progressBar} ${skilStyle.Ajax}`}></div>
                                </div>
                            </Fade>
                        </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}



