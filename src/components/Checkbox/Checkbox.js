import React from "react";
import styles from './Checkbox.module.css';
import {Theme} from "../Theme/Theme";


export const Checkbox = ({id, value, checked, onClick}) => {
    return (
        <div className={styles._}>
            <label htmlFor="scales" onClick={() => onClick(value)}  >
                <input type="checkbox" id={id} name="scales" checked = {checked}/>
                {value}
            </label>
        </div>
    );
}
