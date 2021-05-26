import React from "react";
import styles from './ButtonFiltersToggle.module.css';
import {ReactComponent as Sun} from '../../static/filter.svg';
import {useDispatch} from "react-redux";
import {AllActions} from "../../actions";

export const ButtonFiltersToggle = () => {

    const dispatch = useDispatch();
    const handleToggleVisible = () => dispatch(AllActions.filterActions.toggleIsFilterVisible());

    return (
        <button className={styles._} type="button" onClick={handleToggleVisible}>
            <Sun className={styles.icon} />
            Фильтры
        </button>
    );
}
