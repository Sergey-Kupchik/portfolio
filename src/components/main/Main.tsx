import React from 'react';
import styles from './Main.module.css';
// import userPhoto from './../common/image/user';
type MainPropsType = {}

export const Main = (props: MainPropsType) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <img className={styles.mainPhoto}
                     src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/42956055_103293580649865_5108843287691657216_n.jpg?_nc_cat=103&ccb=3&_nc_sid=174925&_nc_ohc=tDacfhg1MooAX8EcU67&_nc_ht=scontent-mia3-2.xx&oh=aa7568f701297c5120a321692f99ca4a&oe=60566BBE"/>
                <div className={styles.mainInfo}>
                    <h5>HI THERE !</h5>
                    <h1>Sergey Kupchik</h1>
                    <p>Creative Front End Web Developer</p>
                </div>

            </div>
        </div>
    );
}


