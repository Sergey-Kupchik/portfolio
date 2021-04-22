import React from 'react';
import styles from './MyExpertises.module.scss';
import { SectionHead } from '../common/sectionHead/SectionHead';
import {Resume} from './resume/Resume';




export const MyExpertises:React.FunctionComponent = () => {
    return (
        <div className={styles.wrapper} id={'about'}>
            <div className={styles.container}>
                <SectionHead description={"MY RESUME"} title={"MY EXPERTISES"}/>
                <div className={styles.sectionInner}>
                    <div className={`${styles.box} ${styles.boxTop}`}>
                        <div className={styles.block1}>
                            <h5>My Experience</h5>
                        </div>
                        <div className={styles.block2}>
                            <Resume description={"Developing SPA application for its domestic and international clients.\n" +
                            "The project includes developing an internal application with the React and Redux frameworks with TypeScript.\n" +
                            "Responsible for designing and developing interactive UI pages with HTML5, CSS3, SASS and AJAX.\n" +
                            "Used AJAX & JSON communication against Restful web services.\n" +
                            "Responsible for managing the state of applications with popular libraries and internals of React.\n" +
                            "Implemented Jest and Storybook frameworks for unit testing the application."} position={"Front-end Developer"} company={"BD ApSoft LLP"} period={"Feb 2019 - Present "}status={'New'}/>
                            <Resume description={"Developed the various screens and its architecture in accordance to UI Specs. \n" +
                            "Wrote extensive JavaScript, HTML/ HTML5 and CSS3 build dynamic pages using Webstorm. \n" +
                            "Integrated the React.JS application with the RESTful web services.\n" +
                            "Developed a fully functional login page for the company’s user facing website with complete UI and validations.\n" +
                            "Fixed bugs related to side effects (used React.memo, useCallback, useEffect)."} position={"Front-end Developer"} company={"Beatmaker.tv"} period={"Mar 2016 - Feb 2019  "}status={'New'}/>
                        </div>
                    </div>
                    <div className={`${styles.box} ${styles.boxBottom}`}>
                        <div className={styles.block1}>
                            <h5>My Education
                            </h5>
                        </div>
                        <div className={styles.block2}>
                            <Resume position={"Master of Engineering"} company={"National Technical University"} period={"2009 - 2015"}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}


