import React, {useState} from 'react';
import styles from './ClearableInput.module.css';
import {ReactComponent as ClearButton} from '../../static/x-large.svg';
import cc from "classcat";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const ClearableInput = ({placeholder, firstLetter, style}) => {

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
            />

            <ClearButton className={styles.icon}/>
        </div>
    );
};
