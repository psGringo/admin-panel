import React, {useEffect, useState} from "react";
import styles from './OrderSelect.module.css';
import cc from "classcat";
import {CheckboxLabel} from "../../Checkboxes/CheckboxLabel/CheckboxLabel";
import {useDispatch, useSelector} from "react-redux";
import {toggleOrderSelect} from "../../../actions/orderSelectActions";
import {setFilterOrderState} from "../../../actions/tableDataActions";


export const OrderSelect = ({values, defaultValue}) => {

    const isExpanded = useSelector(state => state.orderSelect.isExpanded);
    const dispatch = useDispatch();
    const isLightTheme = useSelector(state => state.theme.isLight);


    const handleCheckBoxClick = (value) => {
        dispatch(setFilterOrderState(value))
    }

    const handleClick = () => {
        dispatch(toggleOrderSelect());
    }

    return (
        <div className={cc({
            [styles._]: true,
            [styles.darkTheme]: !isLightTheme,
        })}
        >
            <div className={cc({
                [styles.selectBox]: true,
                [styles.darkTheme]: !isLightTheme,
            })}
                 onClick={handleClick}
            >
                <select
                        className={cc({
                            [styles.select]: true,
                            [styles.darkTheme]: !isLightTheme,
                        })}
                        id="selectBox">
                    <option>{defaultValue}</option>
                </select>
                <div className={styles.overSelect}></div>
            </div>


            <div className={cc({
                [styles.checkboxes]: true,
                [styles.checkboxesVisible]: isExpanded,
                [styles.darkTheme]: !isLightTheme
            })}
            >
                {values.map((value) => (<CheckboxLabel key={value} value={value} onClick={handleCheckBoxClick}/>))}
            </div>
        </div>
    )
}
