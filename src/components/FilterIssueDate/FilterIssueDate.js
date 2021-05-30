import React, {useState} from "react";
import styles from './FilterIssueDate.module.css';
import {ClearableInput} from "../ClearableInput/ClearableInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ClearableInputDate} from "../ClearableInputDate/ClearableInputDate";

export const FilterIssueDate = () => {

    return (
        <div className={styles._}>
            <div className={styles.title}>Дата оформления</div>

            <div className={styles.inputDates}>
                <ClearableInputDate placeholder="dd.mm.yyyy" firstLetter = "c" />
                <ClearableInputDate placeholder="dd.mm.yyyy" firstLetter = "по" style={styles.clearableInputUntil} />
            </div>

        </div>
    );
}
