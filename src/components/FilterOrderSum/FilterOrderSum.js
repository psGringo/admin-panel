import React from "react";
import styles from './FilterOrderSum.module.css';
import {ClearableInput} from "../ClearableInput/ClearableInput";
import {useDispatch} from "react-redux";
import {setFilterSummaFrom, setFilterSummaTo} from "../../actions/tableDataActions";


export const FilterOrderSum = () => {

    const dispatch = useDispatch();

    const handleChangeFrom = (e) => {
        dispatch(setFilterSummaFrom(parseFloat(e.target.value)));
    }

    const handleChangeTo = (e) => {
        dispatch(setFilterSummaTo(parseFloat(e.target.value)));
    }

    return (
        <div className={styles._}>
            <div className={styles.title}>Сумма заказа</div>
            <div className={styles.inputDates}>

                <ClearableInput
                    placeholder="Р"
                    firstLetter="от"
                    onChange = {handleChangeFrom}
                />

                <ClearableInput
                    placeholder="Р"
                    firstLetter="до"
                    style={styles.clearableInputUntil}
                    onChange={handleChangeTo}
                />
            </div>
        </div>
    );
}
