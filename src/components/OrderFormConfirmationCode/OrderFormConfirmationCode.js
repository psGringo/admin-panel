import React from "react";
import styles from './OrderFormConfirmationCode.module.css';
import {ReactComponent as Lock} from '../../static/x-medium.svg';


export const OrderFormConfirmationCode = ({text, defaultValue}) => {
    return (
        <div className={styles._}>
            <div className={styles.title}>
                {text}
            </div>
            <div className={styles.date}>
                <input type="text" defaultValue={defaultValue} className={styles.input}/>
                <Lock className = {styles.icon}/>
            </div>
        </div>
    );
}
