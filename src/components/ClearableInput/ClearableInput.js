import React, {useState} from 'react';
import styles from './ClearableInput.module.css';
import {ReactComponent as ClearButton} from '../../static/x-large.svg';

export const ClearableInput = ({placeholder, firstLetter, width, margin}) => {
    return (
        <div className={styles._} style={{width: width,  margin: margin}}>
            <div className={styles.firstLetter}>{firstLetter}</div>
            <input
                className={styles.input}
                placeholder={placeholder}
            />
            <ClearButton className={styles.icon}/>
        </div>
    );
};