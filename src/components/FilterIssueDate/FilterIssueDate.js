import React from "react";
import styles from './FilterIssueDate.module.css';
import {ClearableInput} from "../ClearableInput/ClearableInput";
import {ReactComponent as ClearButton} from '../../static/x-large.svg';

export const FilterIssueDate = () => {
    return (
        <div className={styles._}>
            <div className={styles.title}>Дата оформления</div>
            <div className={styles.inputDates}>
                <ClearableInput placeholder="dd.mm.yyyy" firstLetter = "c" width="8.87rem" />
                <ClearableInput placeholder="dd.mm.yyyy" firstLetter = "по" width="8.87rem" margin="0 0 0 1rem" children = {ClearButton} />
            </div>

        </div>
    );
}