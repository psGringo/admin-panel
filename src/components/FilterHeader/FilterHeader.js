import React from "react";
import styles from './FiltersHeader.module.css';
import {SearchBox} from "../SearchBox/SearchBox";
import {FiltersToggleButton} from "../FiltersToggleButton/FiltersToggleButton";
import {LoadIndication} from "../LoadIndication/LoadIndication";

export const FilterHeader = () => {
    return (
        <div className={styles._}>
          <div className={styles.searchBoxAndFiltersToggleButton}>
              <SearchBox />
              <FiltersToggleButton />
          </div>
          <LoadIndication />
        </div>
    );
}