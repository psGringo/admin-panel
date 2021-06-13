import React from "react";
import styles from './FiltersHeader.module.css';
import {SearchBox} from "../SearchBox/SearchBox";
import {ButtonFiltersToggle} from "../ButtonFiltersToggle/ButtonFiltersToggle";
import {LoadIndication} from "../LoadIndication/LoadIndication";
import {useSelector} from "react-redux";

export const FilterHeader = () => {
    const isVisibleLoadIndication = useSelector(state => state.loadIndication.isVisible)
    return (
        <div className={styles._}>
            <div className={styles.searchBoxAndFiltersToggleButton}>
                <SearchBox/>
                <ButtonFiltersToggle/>
            </div>
            {isVisibleLoadIndication ? <LoadIndication/> : null}
        </div>
    );
}
