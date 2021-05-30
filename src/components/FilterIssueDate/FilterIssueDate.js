import React, {useState} from "react";
import styles from './FilterIssueDate.module.css';
import "react-datepicker/dist/react-datepicker.css";
import {ClearableInputDate} from "../ClearableInputDate/ClearableInputDate";
import {useDispatch, useSelector} from "react-redux";
import {setFilterDateFrom, setFilterDateTo} from "../../actions/tableDataActions";


export const FilterIssueDate = () => {

    const valueFrom = useSelector(state => state.tableData.dateFrom)
    const valueTo = useSelector(state => state.tableData.dateTo)
    const dispatch = useDispatch();

    const handleOnChangeFrom = (date) => {
        dispatch(setFilterDateFrom(date))
    }

    const handleOnChangeTo = (date) => {
        dispatch(setFilterDateTo(date))
    }

    return (
        <div className={styles._}>
            <div className={styles.title}>Дата оформления</div>

            <div className={styles.inputDates}>

                <ClearableInputDate
                    firstLetter = "c"
                    value = {valueFrom}
                    onChange={handleOnChangeFrom}
                />

                <ClearableInputDate
                    firstLetter = "по"
                    style={styles.clearableInputTo}
                    value = {valueTo}
                    onChange={handleOnChangeTo}
                />

            </div>
        </div>
    );
}
