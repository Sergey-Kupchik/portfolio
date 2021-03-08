import React, {useState} from 'react';
import styles from './BurgerNav.module.scss';
import {Link} from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
type NavPropsType = {}

export const BurgerNav = (props: NavPropsType) => {
    let [navItems, setNavItems] = useState(false)
    let onClick = ()=>{
        setNavItems(!navItems)
    }
    return (
        <div className={styles.nav}>
           <div className={styles.navItems} style={navItems?{display:"flex"}:{display:"none"}}>
                <Link
                    activeClass={styles.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >HOME</Link>
                <Link
                    activeClass={styles.active}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >ABOUT</Link>
                <Link
                    activeClass={styles.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >SKILLS</Link>
                <Link
                    activeClass={styles.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >PROJECTS</Link>
                <Link
                    activeClass={styles.active}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={500}
                >CONTACT</Link>
            </div>
            <div className={styles.btn} ><GiHamburgerMenu onClick={onClick}/></div>
        </div>
    );
}


