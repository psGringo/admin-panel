import React, {useState} from "react";
import styles from './OrderSelect.module.css';
import cc from "classcat";
import {Checkbox} from "../Checkbox/Checkbox";


export const OrderSelect = ({values, caption, defaultValue}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const options = values.map((value) => (
        <Checkbox key={value} value={value}/>
    ))

    return (
        <div className={styles._}>

            <div className={styles.selectBox} onClick={() => {
                setIsExpanded(!isExpanded)
            }}>
                <select className={styles.select} id="selectBox">
                    <option>{defaultValue}</option>
                </select>
                <div className={styles.overSelect}></div>
            </div>

            <div className={cc({
                [styles.checkboxes]: true,
                [styles.checkboxesVisible]: isExpanded,
            })}
            >
               {options}
            </div>
        </div>
    )
}