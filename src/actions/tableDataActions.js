import {
    CHANGE_ACTIVE_PAGE_INDEX,
    CHANGE_LEFT_PAGE_INDEX,
    CHANGE_RIGHT_PAGE_INDEX,
    GET_PAGE,
    SET_FILTER_DATE_FROM,
    SET_FILTER_DATE_TO,
    SET_ORDER_STATE_TO_FILTER,
    SET_SUMMA_FROM,
    SET_SUMMA_TO,
    TOGGLE_ROW_CHECKED,
    TOGGLE_CHECKED_ALL_ROWS,
    DELETE_SELECTED_TABLE_ROWS,
    UPDATE_INDEX_OF_SELECTED_ORDER,
    GET_DATA,
    GET_STATES, TOGGLE_TABLE_DATA_SORT,
} from "./actionTypes";

import {GenerateData} from "../components/DataGenerator/DataGenereator";
import {fetchWrapper} from "../api/fetchWrapper";
import {toggleLoadIndicationVisible} from "./loadIndicationActions";
import {toggleTableDataSortDirections} from "./tableDataSortDirectionsActions";

export const getPage = (pageIndex) => {
    return {
        type: GET_PAGE,
        payload: pageIndex
    }
}

export const toggleRowChecked = (id) => {
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

export const updateIndexOfSelectedOrder = (selectedOrderId) => {
    return {
        type: UPDATE_INDEX_OF_SELECTED_ORDER,
        payload: selectedOrderId
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

export const setData = (value) => {
    return {
        type: GET_DATA,
        payload: value
    }
}

export const setStates = (value) => {
    return {
        type: GET_STATES,
        payload: value
    }
}


export const fetchTableData = () => (dispatch) => {
    dispatch(toggleLoadIndicationVisible());

    fetchWrapper.get('api/data')
        .then(data => {
                dispatch(setData(data.orders));
                dispatch(toggleLoadIndicationVisible());
            }
        )
        .catch(error => {
            dispatch(toggleLoadIndicationVisible());
            alert(error)
        });
}

export const fetchStates = () => (dispatch) => {
    fetchWrapper.get('api/states')
        .then(data => {
                dispatch(setStates(data.states))
            }
        )
        .catch(error => alert(error));
}

const updateTableData = (value, dispatch, url) => {
    dispatch(toggleLoadIndicationVisible());
    fetchWrapper.post(url, value)
        .then(data => {
                dispatch(setData(data.orders));
                dispatch(toggleLoadIndicationVisible());
            }
        )
        .catch(error => {
            dispatch(toggleLoadIndicationVisible());
            alert(error)
        });
}

export const filterTableDataByOrderNoOrPerson = (value) => (dispatch) => {
    updateTableData(value, dispatch, 'api/filterNoOrPerson/');
}

export const filterTableFromPanel = (value) => (dispatch) => {
    updateTableData(value, dispatch, 'api/panelFilters/');
}

export const deleteSelectedTableRows = (value) => (dispatch) => {
    updateTableData(value, dispatch, 'api/delete/');
}

export const sortTableRows = (value) => (dispatch) => {
    updateTableData(value, dispatch, 'api/sort');
    dispatch(toggleTableDataSortDirections(value.sortParam));
}
