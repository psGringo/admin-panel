import React from "react";
import styles from './ButtonChangeStatus.module.css';
import {ReactComponent as Pencil} from '../../static/pencil.svg';

export const ButtonChangeStatus = () => {
    return (
        <button className={styles._} type="button">
            <Pencil className={styles.icon}/>
            <div className={styles.text}>Изменить статус</div>
        </button>
    );
}