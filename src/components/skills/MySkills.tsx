import React from 'react';
import styles from './MySkills.module.css';
import {Skill, SkillType} from './skill/Skill';


export const MySkills = () => {

    const mySkillsState: Array<SkillType> = [
        {
            name: 'React',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente!'
        },
        {
            name: 'Redux',
            logo: 'https://code4developers.com/wp-content/uploads/2018/01/Redux.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!'

        },
        {
            name: 'JavaScript',
            logo: 'https://gitconnected.com/public/images/tutorials/svg/javascript.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!'

        },
        {
            name: 'CSS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!'

        },
        {
            name: 'CSS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!'

        },
        {
            name: 'CSS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!'

        },
        {
            name: 'HTML',
            logo: 'https://banner2.cleanpng.com/20180802/tpl/kisspng-logo-html5-brand-clip-art-%E6%9D%89-%E5%B1%B1-%E8%89%AF-%E9%9B%84-5b62be01b565d5.334247781533197825743.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!'

        },
        {
            name: 'Typescript',
            logo: 'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto atque illo sapiente totam!'

        },
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.skillsContainer}>
                <div className={styles.title}>
                    <h2>My skills</h2>
                </div>
                <div className={styles.skillsList}>
                    {mySkillsState.map(s => {
                        return <Skill name={s.name} logo={s.logo} description={s.description}/>
                    })}
                </div>
            </div>
        </div>
    );
}


