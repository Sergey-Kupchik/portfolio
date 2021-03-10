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
                            <Resume description={"The project includes developing an internal application with the React and Redux frameworks with TypeScript. Responsible for designing and developing interactive UI pages with HTML5, CSS3, SASS and AJAX.Used AJAX & JSON communication against Restful web services. Managed application state using Redux and React.useState Hook. Created small react components to avoid the code redundancy. Implemented single page apps by using routing of React to take the user to various views.Developed the various screens and its architecture in accordance to UI Specs. Wrote extensive JavaScript, HTML and SASS/CSS build dynamic pages using Webstorm.Implemented Jest and Storybook frameworks for unit testing the application. Fixed bugs related to side effects (used React.memo, useCallback, useEffect)."} position={"Front-end Developer"} company={"Turbopar Engineering Design Inc. "} period={"May 2020 - Present "}status={'New'}/>
                        </div>
                    </div>
                    <div className={`${styles.box} ${styles.boxBottom}`}>
                        <div className={styles.block1}>
                            <h5>My Education
                            </h5>
                        </div>
                        <div className={styles.block2}>
                            <Resume position={"Front-End Developer"} company={"Bootcamp (Front-End)"} period={"2019 - 2020"}status={'New'}/><Resume position={"Master of Engineering"} company={"National Technical University (Belarus)"} period={"2009 - 2015"}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}


