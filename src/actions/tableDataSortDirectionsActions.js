import {
    TOGGLE_TABLE_DATA_SORT
} from "./actionTypes";

export const toggleTableDataSortDirections = (sortParam) => {
    return {
        type: TOGGLE_TABLE_DATA_SORT,
        payload: sortParam
    }
}
