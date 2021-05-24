import React from "react";
import styles from './ButtonFiltersToggle.module.css';
import {ReactComponent as Sun} from '../../static/filter.svg';

export const ButtonFiltersToggle = () => {
    return (
        <button className={styles._} type="button">
            <Sun className={styles.icon} />
            Фильтры
        </button>
    );
}