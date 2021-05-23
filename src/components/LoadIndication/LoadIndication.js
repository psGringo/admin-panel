import React from "react";
import styles from './LoadIndication.module.css';
import {ReactComponent as Sun} from "../../static/refresh.svg";

export const LoadIndication = () => {
    return (
        <div className={styles._}>
            <Sun className = {styles.icon} />
            <div className={styles.title}> Загрузка</div>
        </div>
    );
}