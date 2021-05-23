import React from "react";
import styles from './FiltersToggleButton.module.css';
import {ReactComponent as Sun} from '../../static/filter.svg';

export const FiltersToggleButton = () => {
    return (
        <button className={styles._} type="button">
            <Sun className={styles.icon} />
            Фильтры
        </button>
    );
}