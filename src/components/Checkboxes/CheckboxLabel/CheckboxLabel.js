import React from "react";
import styles from './CheckboxLabel.module.css';


export const CheckboxLabel = ({id, value, checked, onClick}) => {
    return (
        <div className={styles._}>
            <label htmlFor="scales" onClick={() => onClick(value)}>
                <input type="checkbox" id={id} name="scales" checked = {checked}/>
                {value}
            </label>
        </div>
    );
}
