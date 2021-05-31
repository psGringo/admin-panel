import React, {useEffect, useState} from "react";
import styles from './OrderSelect.module.css';
import cc from "classcat";
import {Checkbox} from "../Checkbox/Checkbox";
import {useDispatch, useSelector} from "react-redux";
import {toggleOrderSelect} from "../../actions/orderSelectActions";
import {setFilterOrderState} from "../../actions/tableDataActions";


export const OrderSelect = ({values, defaultValue}) => {

    const isExpanded = useSelector(state => state.orderSelect.isExpanded);
    const dispatch = useDispatch();


    const handleCheckBoxClick = (value) => {
       dispatch(setFilterOrderState(value))
    }

    const handleClick = () => {
        dispatch(toggleOrderSelect());
    }

    return (
        <div className={styles._}>
            <div className={styles.selectBox} onClick={handleClick}>
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

                {values.map((value) => (<Checkbox key={value} value={value} onClick={handleCheckBoxClick}/>))}
            </div>
        </div>
    )
}
