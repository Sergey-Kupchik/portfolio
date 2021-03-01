import React from 'react';
import styles from './Nav.module.scss';
import {Link, animateScroll as scroll} from 'react-scroll';

type NavPropsType = {}

export const Nav = (props: NavPropsType) => {
    return (
        <div className={styles.nav}>
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
            offset={1}
            duration={500}
        >CONTACT</Link>
        </div>
    );
}


