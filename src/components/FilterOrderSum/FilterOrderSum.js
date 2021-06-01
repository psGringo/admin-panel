import React from "react";
import styles from './FilterOrderSum.module.css';
import {ClearableInput} from "../ClearableInput/ClearableInput";
import {useDispatch, useSelector} from "react-redux";
import {setFilterSummaFrom, setFilterSummaTo} from "../../actions/tableDataActions";


export const FilterOrderSum = () => {

    const dispatch = useDispatch();

    const handleChangeFrom = (e) => {
        const value = e ? e.target.value : '';
        dispatch(setFilterSummaFrom(value));
    }

    const handleChangeTo = (e) => {
        const value = e ? e.target.value : '';
        dispatch(setFilterSummaTo(value));
    }

    const valueFrom = useSelector(state => state.filter.summaFrom);
    const valueTo = useSelector(state => state.filter.summaTo);

    return (
        <div className={styles._}>
            <div className={styles.title}>Сумма заказа</div>
            <div className={styles.inputDates}>

                <ClearableInput
                    placeholder="Р"
                    value = {valueFrom}
                    firstLetter="от"
                    onChange = {handleChangeFrom}
                />

                <ClearableInput
                    placeholder="Р"
                    firstLetter="до"
                    style={styles.clearableInputUntil}
                    onChange={handleChangeTo}
                    value = {valueTo}
                />
            </div>
        </div>
    );
}
