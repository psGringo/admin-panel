import {SET_FILTER_DATE_FROM, SET_FILTER_DATE_TO, TOGGLE_IS_FILTER_VISIBLE} from "./actionTypes";

export const toggleIsFilterVisible = () => {
    return {
        type: TOGGLE_IS_FILTER_VISIBLE
    }
}

export const setFilterDateFrom = (date) => {
    return {
        type: SET_FILTER_DATE_FROM,
        payload: date
    }
}

export const setFilterDateTo = (date) => {
    return {
        type: SET_FILTER_DATE_TO,
        payload: date
    }
}

export default {
    toggleIsFilterVisible
}
