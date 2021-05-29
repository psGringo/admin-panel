import React from "react";
import styles from './IconText.module.css';

export const IconText = ({text, icon, style, onClick}) => {
     return (
        <div
            className={styles._}
            onClick={onClick}
        >
             <div className={styles.icon}>{icon}</div>
             <div className={styles.text}>{text}</div>
        </div>
    );
}
