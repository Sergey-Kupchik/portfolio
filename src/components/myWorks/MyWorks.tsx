import React from 'react';
import styles from './MyWorks.module.css';
import {MyWork, MyWorkType} from '../newWorks/myWork/MyWork';



export const MyWorks= () => {

    const myWorksState: Array<MyWorkType> = [
        {
            name: 'Social media',
            logo: 'https://images.techhive.com/images/article/2016/10/facebook-login-screen-oct2016-100688809-large.gif',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!',
            link: "https://www.facebook.com/",
        },
        {
            name: 'No social media',
            logo: 'https://images.techhive.com/images/article/2016/10/facebook-login-screen-oct2016-100688809-large.gif',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!',
            link: "https://www.facebook.com/",
        },
        {
            name: 'Definitely no social media',
            logo: 'https://images.techhive.com/images/article/2016/10/facebook-login-screen-oct2016-100688809-large.gif',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!',
            link: "https://www.facebook.com/",
        },
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.myWorksContainer}>
                <div className={styles.title}>
                    <h2>Recent work</h2>
                </div>
                <div className={styles.myWorksList}>
                    {myWorksState.map((w,index) => {
                        return <MyWork name={w.name} logo={w.logo} description={w.description} link={w.link} key={index}/>
                    })}
                </div>
            </div>
        </div>
    );
}


