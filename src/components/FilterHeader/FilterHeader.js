import React from "react";
import styles from './FiltersHeader.module.css';
import {SearchBox} from "../SearchBox/SearchBox";
import {ButtonFiltersToggle} from "../ButtonFiltersToggle/ButtonFiltersToggle";
import {LoadIndication} from "../LoadIndication/LoadIndication";

export const FilterHeader = () => {
    return (
        <div className={styles._}>
          <div className={styles.searchBoxAndFiltersToggleButton}>
              <SearchBox />
              <ButtonFiltersToggle />
          </div>
          <LoadIndication />
        </div>
    );
}