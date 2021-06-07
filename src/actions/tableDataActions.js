import {
    APPLY_PANEL_FILTERS, CHANGE_ACTIVE_PAGE_INDEX,
    CHANGE_LEFT_PAGE_INDEX,
    CHANGE_RIGHT_PAGE_INDEX,
    FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON,
    GENERATE_RANDOM_TABLE_DATA, GET_PAGE,
    SET_FILTER_DATE_FROM,
    SET_FILTER_DATE_TO,
    SET_ORDER_STATE_TO_FILTER,
    SET_SUMMA_FROM,
    SET_SUMMA_TO,
    TOGGLE_ROW_CHECKED,
    TOGGLE_CHECKED_ALL_ROWS,
    DELETE_SELECTED_TABLE_ROWS,
    UPDATE_INDEX_OD_SELECTED_ORDER,
} from "./actionTypes";

import {GenerateData} from "../components/DataGenerator/DataGenereator";

export const generateRandomTableData = () => {
    return {
        type: GENERATE_RANDOM_TABLE_DATA,
        payload: GenerateData(200)
    }
}

export const getPage = (pageIndex) => {
    return {
        type: GET_PAGE,
        payload: pageIndex
    }
}

export const toggleRowChecked = (id, isChecked) => {
    return {
        type: TOGGLE_ROW_CHECKED,
        payload: id,
    }
}

export const toggleAllRowsChecked = (isChecked) => {
    return {
        type: TOGGLE_CHECKED_ALL_ROWS,
        payload: isChecked
    }
}

export const deleteSelectedTableRows = () => {
    return {
        type: DELETE_SELECTED_TABLE_ROWS,
    }
}


export const filterTableDataByOrderNoOrPerson = (data) => {
    return {
        type: FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON,
        payload: data
    }
}

export const applyPanelFilters = (filterState) => {
    return {
        type: APPLY_PANEL_FILTERS,
        payload: filterState
    }
}


export const updateIndexOfSelectedOrder = (index) => {
    return {
        type: UPDATE_INDEX_OD_SELECTED_ORDER,
        payload: index
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

export const changeLeftPageIndex = (value) => {
    return {
        type: CHANGE_LEFT_PAGE_INDEX,
        payload: value
    }
}

export const changeRightPageIndex = (value) => {
    return {
        type: CHANGE_RIGHT_PAGE_INDEX,
        payload: value
    }
}

export const changeActivePageIndex = (value) => {
    return {
        type: CHANGE_ACTIVE_PAGE_INDEX,
        payload: value
    }
}
