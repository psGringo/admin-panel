import {
    GET_PAGE,
    CHANGE_LEFT_PAGE_INDEX,
    CHANGE_RIGHT_PAGE_INDEX,
    CHANGE_ACTIVE_PAGE_INDEX,
    TOGGLE_ROW_CHECKED,
    TOGGLE_CHECKED_ALL_ROWS,
    UPDATE_ORDER,
    UPDATE_INDEX_OF_SELECTED_ORDER, SET_ORDERS, SET_STATES, SET_ORDER
} from "../actions/actionTypes";

const INITIAL_STATE = {
    data: [],
    offset: 0,
    limit: 10,
    page: [],
    countPages: 0,
    leftPagesIndex: 0,
    rightPagesIndex: 0,
    activePageIndex: 0,
    selectedRows: [],
    indexOfSelectedOrder: -1,
    states: [],
}

const handleToggleSelectedRow = (state, action) => {
    const id = String(action.payload);
    const selectedRows = state.selectedRows.slice();
    const index = selectedRows.indexOf(id);
    index === -1 ? selectedRows.push(id) : selectedRows.splice(index, 1)
    return selectedRows;
}

const handleCheckedAllRows = (state, isChecked) => {
    let selectedRows = [];
    isChecked && (selectedRows = state.data.map(item => String(item.id)))
    return selectedRows;
}

const setOrders = (state, data) => {
    const countPages = Math.ceil(data.length / state.limit);
    const rightIndex = (countPages < 5) ? countPages : 5;
    return {
        ...state,
        data: data,
        page: data.slice(0, state.limit),
        countPages: countPages,
        leftIndex: 0,
        rightIndex: rightIndex,
        activeIndex: 0,
        selectedRows: []
    }
}


const handleUpdateOrder = (state, action) => {

    const page = state.page.slice();

    if (state.indexOfSelectedOrder != -1) {
        page[state.indexOfSelectedOrder].person = action.payload.person;
        page[state.indexOfSelectedOrder].state = action.payload.state;
        return {
            ...state,
            page: page
        }
    }

    return state;
}

const updateIndexOfSelectedOrder = (state, selectedOrderId) => {
    const index = state.data.findIndex(item => item.id === selectedOrderId)
    return index;
}

const setOrder = (state, order) => {
    const page = state.page.slice();
    const orderInData = page.find(item => item.id === order.id);
    if (orderInData) {
        orderInData.person = order.person;
        orderInData.state = order.state;
    }
    return {
        ...state,
        page: page
    }
}

export const tableData = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_ORDERS:
            return setOrders(state, action.payload);

        case SET_ORDER:
            return setOrder(state, action.payload);

        case GET_PAGE:
            return {
                ...state,
                page: state.data.slice(action.payload * state.limit, action.payload * state.limit + state.limit)
            }

        case SET_STATES: {
            return {
                ...state,
                states: action.payload
            }
        }

        case TOGGLE_ROW_CHECKED:
            return {
                ...state,
                selectedRows: handleToggleSelectedRow(state, action)
            }

        case UPDATE_INDEX_OF_SELECTED_ORDER: {
            return {
                ...state,
                indexOfSelectedOrder: updateIndexOfSelectedOrder(state, action.payload)
            }
        }

        case TOGGLE_CHECKED_ALL_ROWS:
            return {
                ...state,
                selectedRows: handleCheckedAllRows(state, action.payload)
            }

        case UPDATE_ORDER:
            return handleUpdateOrder(state, action)

        case CHANGE_LEFT_PAGE_INDEX:
            return {
                ...state,
                leftIndex: action.payload
            }

        case CHANGE_RIGHT_PAGE_INDEX:
            return {
                ...state,
                rightIndex: action.payload
            }

        case CHANGE_ACTIVE_PAGE_INDEX:
            return {
                ...state,
                activeIndex: action.payload
            }


        default:
            return state;
    }
}

