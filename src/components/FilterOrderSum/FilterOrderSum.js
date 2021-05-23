import React from "react";
import styles from './FilterOrderSum.module.css';
import {ClearableInput} from "../ClearableInput/ClearableInput";
import {ReactComponent as ClearButton} from '../../static/x-large.svg';

export const FilterOrderSum = () => {
    return (
        <div className={styles._}>
            <div className={styles.title}>Сумма заказа</div>
            <div className={styles.inputDates}>
                <ClearableInput placeholder="Р" firstLetter = "от" width="7.87rem" />
                <ClearableInput placeholder="Р" firstLetter = "до" width="7.87rem" margin="0 0 0 1rem" children = {ClearButton} />
            </div>

        </div>
    );
}