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
    UPDATE_INDEX_OF_SELECTED_ORDER,
    SET_ORDERS,
    SET_STATES, SET_ORDER,
} from "./actionTypes";

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

export const setOrders = (value) => {
    return {
        type: SET_ORDERS,
        payload: value
    }
}

export const setOrder = (value) => {
    return {
        type: SET_ORDER,
        payload: value
    }
}

export const setStates = (value) => {
    return {
        type: SET_STATES,
        payload: value
    }
}


export const fetchTableData = () => (dispatch) => {
    dispatch(toggleLoadIndicationVisible());

    fetchWrapper.get('api/data')
        .then(data => {
                dispatch(setOrders(data.orders));
                dispatch(toggleLoadIndicationVisible());
            }
        )
        .catch(error => {
            dispatch(toggleLoadIndicationVisible());
            alert(error)
        });
}

export const fetchStates = () => (dispatch) => {
    dispatch(toggleLoadIndicationVisible());
    fetchWrapper.get('api/states')
        .then(data => {
                dispatch(setStates(data.states));
                dispatch(toggleLoadIndicationVisible());
            }
        )
        .catch(error => {
            dispatch(toggleLoadIndicationVisible());
            alert(error);
        });
}

const updateTableData = (value, dispatch, url) => {
    dispatch(toggleLoadIndicationVisible());
    fetchWrapper.post(url, value)
        .then(data => {
                dispatch(setOrders(data.orders));
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

export const fetchOrder = (id) => (dispatch) => {
    dispatch(toggleLoadIndicationVisible());
    fetchWrapper.get('api/order/' + id)
        .then(data => {
                dispatch(setOrder(data.order));
                dispatch(toggleLoadIndicationVisible());
            }
        )
        .catch(error => {
            dispatch(toggleLoadIndicationVisible());
            alert(error)
        });
}
