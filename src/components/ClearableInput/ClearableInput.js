import React, {useState} from 'react';
import styles from './ClearableInput.module.css';
import {ReactComponent as ClearButton} from '../../static/x-large.svg';
import cc from "classcat";


export const ClearableInput = ({placeholder, firstLetter, style, onChange}) => {

    const combinedStyles = cc({
        [styles._]: true,
        [style]: true
    })

    return (
        <div className={combinedStyles}>
            <div className={styles.firstLetter}>{firstLetter}</div>
            <input
                className={styles.input}
                placeholder={placeholder}
                onChange = {onChange}
            />
            <ClearButton className={styles.icon}/>
        </div>
    );
};
