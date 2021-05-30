import {
    SET_FILTER_DATE_FROM,
    SET_FILTER_DATE_TO,
    TOGGLE_IS_FILTER_VISIBLE
} from "./actionTypes";

export const toggleIsFilterVisible = () => {
    return {
        type: TOGGLE_IS_FILTER_VISIBLE
    }
}

export default {
    toggleIsFilterVisible
}
