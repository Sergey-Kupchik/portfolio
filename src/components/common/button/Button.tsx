import React from 'react';
import styles from './Button.module.css';

type ButtonPropsType = {
    href?:string
    text: string
}

export const Button:React.FunctionComponent<ButtonPropsType> = (props) => {
    return (
        <a href={props.href} className={styles.btn}>{props.text}</a>
    );
}


