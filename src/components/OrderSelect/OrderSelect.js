import React, {useState} from "react";
import styles from './OrderSelect.module.css';
import cc from "classcat";
import {Checkbox} from "../Checkbox/Checkbox";
import {useDispatch, useSelector} from "react-redux";
import {AllActions} from "../../actions";
import {ReactComponent as Arrow} from '../../static/v_arrow.svg';


export const OrderSelect = ({values, defaultValue}) => {

    const isExpanded = useSelector(state => state.orderSelect.isExpanded);
    const dispatch = useDispatch();

    const options = values.map((value) => (
        <Checkbox key={value} value={value}/>
    ))


    const handleClick = () => {
        dispatch(AllActions.orderSelectActions.toggleOrderSelect());
    }

    return (
        <div className={styles._}>

            <div className={styles.selectBox} onClick={handleClick}>
                <select className={styles.select} id="selectBox" onClick={handleClick}>
                    <option>{defaultValue}</option>
                    <Arrow className = {styles.icon}/>
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
