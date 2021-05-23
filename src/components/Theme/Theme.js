import React from "react";
import styles from './Theme.module.css';
import { ReactComponent as Sun } from '../../static/sun.svg';

export const Theme = () => {
    return (
        <div className={styles._}>
            <Sun className = {styles.icon} />
            <div className={styles.title}> Светлая тема</div>
        </div>
    );
}