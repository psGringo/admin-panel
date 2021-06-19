import React from "react";
import {FilterHeader} from "../FilterHeader/FilterHeader";
import {FilterBody} from "../FilterBody/FilterBody";
import {useSelector} from "react-redux";

export const Filter = () => {
    const isFilterVisible = useSelector(state => state.filter.isVisible);
    return (
        <div>
          <FilterHeader />
          {isFilterVisible ? <FilterBody /> : null}
        </div>
    );
}
