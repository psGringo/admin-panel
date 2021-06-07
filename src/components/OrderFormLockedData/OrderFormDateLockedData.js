import React from "react";
import styles from './OrderFormDateLockedData.module.css';
import {ReactComponent as Lock} from '../../static/locked.svg';
import {useSelector} from "react-redux";


export const OrderFormDateLockedData = ({text, value}) => {
    return (
        <div className={styles._}>
            <div className={styles.title}>
                {text}
            </div>
            <div className={styles.date}>
                <input type="text" readOnly value={value} className={styles.input}/>
                <Lock className = {styles.icon}/>
            </div>
        </div>
    );
}
