import React from 'react';
import styles from './Main.module.scss';
import buttonStyle from './../common/button/Button.module.scss';
import userPhoto from '../common/image/user.jpg';
import {Button} from '../common/button/Button';
import {ScrollDown} from './scrollDown/scrollDown';
import Particles from 'react-particles-js';


const particlesOpt = {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#8444df"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":true,"distance":80.17060304327615,"color":"#5f6f81","opacity":0.4,"width":0.9620472365193136},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}


type MainPropsType = {}

export const Main = (props: MainPropsType) => {
    return (
        <div className={styles.wrapper}>
            <Particles className={styles.particles} params={particlesOpt}/>
            <div className={styles.mainContainer}>
                <img className={styles.mainPhoto}
                     src={userPhoto}/>
                <div className={styles.mainInfo}>
                    <h5>HI THERE !</h5>
                    <h1>I'M <span>SERGEY KUPCHIK</span></h1>
                    <p>Passionate designer & developer who loves simplicity
                        in things and crafts beautiful user interfaces with love.</p>
                    <div className={styles.mainInfoButtons}><Button text={'Hire Me'} href={''}/>
                        <a target="_blank" href="https://linkedin.com/"
                           className={`${buttonStyle.btn} ${styles.btnLink}`}>Download CV</a>
                    </div>
                </div>
            </div>
            <ScrollDown/>
        </div>
    );
}



