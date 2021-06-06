import React from "react";
import styles from './IconButton.module.css';

export const IconButton = ({text, icon, className, onClick}) => {
     return (
        <button
            type="button"
            className={className}
            onClick={onClick}
        >
             <div className={styles.icon}>{icon}</div>
             <div className={styles.text}>{text}</div>
        </button>
    );
}
