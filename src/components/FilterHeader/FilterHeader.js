import React from "react";
import styles from './FiltersHeader.module.css';
import {SearchBox} from "../SearchBox/SearchBox";
import {ButtonFiltersToggle} from "../ButtonFiltersToggle/ButtonFiltersToggle";
import {LoadIndication} from "../LoadIndication/LoadIndication";
import {useSelector} from "react-redux";

export const FilterHeader = () => {
    const isStartLoading = useSelector(state => state.tableData.isFetchAllDataStarted);
    return (
        <div className={styles._}>
            <div className={styles.searchBoxAndFiltersToggleButton}>
                <SearchBox/>
                <ButtonFiltersToggle/>
            </div>
            {isStartLoading ? <LoadIndication/> : null}
        </div>
    );
}
