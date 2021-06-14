import React from "react";
import styles from './Checkbox.module.css';


export const Checkbox = ({id, value, checked, onChange}) => {
    return (
        <div className={styles._}>
            <input type="checkbox" id={id} name="scales" checked={checked} onChange={onChange}/>
            {value}
        </div>
    );
}
