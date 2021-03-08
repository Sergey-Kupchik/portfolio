import React from 'react';
import styles from './Button.module.scss';
import {Link} from 'react-scroll';

type ButtonPropsType = {
    href?:string
    text: string
}

export const Button:React.FunctionComponent<ButtonPropsType> = (props) => {
    return (


        <Link
            activeClass={styles.active}
            to={"contact"}
            spy={true}
            smooth={true}
            offset={70}
            duration={500}
            className={styles.btn}
        >{props.text}</Link>

    );
}


