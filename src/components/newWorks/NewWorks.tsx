import React from 'react';
import styles from './NewWorks.module.scss';
import { SectionHead } from '../common/sectionHead/SectionHead';
import {MyWork, MyWorkType} from './myWork/MyWork';
import img1 from '../common/image/turbopar1.png';
import img2 from '../common/image/turbopar2.png';
import img3 from '../common/image/sn.png';



export const NewWorks:React.FunctionComponent = () => {
    const myWorksState: Array<MyWorkType> = [
        {
            name: 'Social media',
            logo: img1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!',
            link: "https://www.facebook.com/",
        },
        {
            name: 'No social media',
            logo:img2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!',
            link: "https://www.facebook.com/",
        },
        {
            name: 'Definitely no social media',
            logo: img3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!',
            link: "https://www.facebook.com/",
        },
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <SectionHead description={"Recent works"} title={"Portfolio"}/>
                <div className={styles.sectionInner}>
                    <div className={`${styles.box}`}>
                        <div className={styles.myWorksList}>
                            {myWorksState.map((w,index) => {
                                return <MyWork name={w.name} logo={w.logo} description={w.description} link={w.link} key={index}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


