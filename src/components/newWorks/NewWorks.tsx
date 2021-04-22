import React from 'react';
import styles from './NewWorks.module.scss';
import {SectionHead} from '../common/sectionHead/SectionHead';
import {MyWork, MyWorkType} from './myWork/MyWork';
import img1 from '../common/image/ridan.jpg';
import img3 from '../common/image/sn.png';
import img2 from '../common/image/beatmaker.png';


export const NewWorks: React.FunctionComponent = () => {
    const myWorksState: Array<MyWorkType> = [
        {
            name: 'Beatmaker.tv',
            logo: img2,
            description: 'Beatmaker.tv is a digital music and podcast App that gives you access to millions of songs and other content from creators all over the world. We created this project from scratch and now we get up to 2k downloads per day.',
            tech:"Technologies stack: React, Redux, TypeScript, Kubernetes, MS SQL, MongoDb, NodeJS, .net core, mvc.net.",
            link: 'https://beatmaker.tv/',
        },
        {
            name: 'Circle network',
            logo: img3,
            description: "You can create your profile and be part of active users in my privet social media. The project is built on React.JS, Redux. The platform allows you updates your profile by sending asyncronous requests to server with Axios.You  can also get in touch with other users in my chat on Websocket.The backend was written in Node.js In order to make asyncronous requests I used axios library. All data form I manage by Redux-Form. The frontend is also connected to the redux store and uses redux-thunk to make asynchronous requests to the server and then update the state.",
            tech:"Tech stacks: React, Redux, Formik, GH-pages, Redux Form, React-router-dom, Typescript, EmailJS, REST API, Ajax, TDD, SASS, Jest.",
            link: 'https://github.com/Sergey-Kupchik/Social_Media/tree/master/my-app',
        },
        {
            name: 'Customer relationship management',
            logo: img1,
            description: 'The e-commerce system was created to improve the quality and speed of work of regular customers with equipment. It allows you to significantly reduce the time of selection, receipt of a commercial offer and ordering equipment and make this process more flexible and convenient for the client.',
            tech:'Tech stacks: React, Redux, React-router-dom, Typescript, Redux, REST API, Ajax, TDD, Material-UI, Jest.',
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
                                               key={index} tech={w.tech}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


