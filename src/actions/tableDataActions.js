import {
    APPLY_PANEL_FILTERS,
    FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON,
    GENERATE_RANDOM_TABLE_DATA,
    SET_FILTER_DATE_FROM,
    SET_FILTER_DATE_TO,
    SET_ORDER_STATE_TO_FILTER,
    SET_SUMMA_FROM,
    SET_SUMMA_TO
} from "./actionTypes";

import {GenerateData} from "../components/DataGenerator/DataGenereator";

export const generateRandomTableData = () => {
    return {
        type: GENERATE_RANDOM_TABLE_DATA,
        payload: GenerateData(200)
    }
}

export const filterTableDataByOrderNoOrPerson = (data) => {
    return {
        type: FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON,
        payload: data
    }
}

export const applyPanelFilters = () => {
    return {
        type: APPLY_PANEL_FILTERS,
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

export const setFilterSummaFrom = (price) => {
    return {
        type: SET_SUMMA_FROM,
        payload: price
    }
}

export const setFilterSummaTo = (price) => {
    return {
        type: SET_SUMMA_TO,
        payload: price
    }
}

export const setFilterOrderState = (orderState) => {
    return {
        type: SET_ORDER_STATE_TO_FILTER,
        payload: orderState
    }
}
