import React from "react";
import styles from './ButtonDelete.module.css';
import {ReactComponent as Bin} from '../../static/bin.svg';

export const ButtonDelete = () => {
    return (
        <button className={styles._} type="button">
            <Bin className={styles.icon}/>
            <div className={styles.text}>Удалить</div>
        </button>
    );
}