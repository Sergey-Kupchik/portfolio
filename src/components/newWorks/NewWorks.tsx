import React from 'react';
import styles from './NewWorks.module.scss';
import {SectionHead} from '../common/sectionHead/SectionHead';
import {MyWork, MyWorkType} from './myWork/MyWork';
import img1 from '../common/image/todo.png';
import img3 from '../common/image/sn.png';


export const NewWorks: React.FunctionComponent = () => {
    const myWorksState: Array<MyWorkType> = [
        {
            name: 'Social media',
            logo: img3,
            description: 'Tech stacks: React, Redux, Formik, GH-pages, Redux Form, React-router-dom, Typescript, EmailJS, REST API, Ajax, TDD, SASS, Jest.',
            link: 'https://github.com/Sergey-Kupchik/Social_Media/tree/master/my-app',
        },
        {
            name: 'Task manager',
            logo: img1,
            description: 'Tech stacks: React, Redux, React-router-dom, Typescript, Redux, REST API, Ajax, TDD, Material-UI, Jest.',
            link: 'https://github.com/Sergey-Kupchik/todolist-tsx',
        },
    ]

    return (
        <div className={styles.wrapper} id={'projects'}>
            <div className={styles.container}>
                <SectionHead description={'Recent works'} title={'Portfolio'}/>
                <div className={styles.sectionInner}>
                    <div className={`${styles.box}`}>
                        <div className={styles.myWorksList}>
                            {myWorksState.map((w, index) => {
                                return <MyWork name={w.name} logo={w.logo} description={w.description} link={w.link}
                                               key={index}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


