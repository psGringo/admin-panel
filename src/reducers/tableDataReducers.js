import {
    GENERATE_RANDOM_TABLE_DATA,
    FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON,
    APPLY_PANEL_FILTERS, GET_PAGE,
    CHANGE_LEFT_PAGE_INDEX,
    CHANGE_RIGHT_PAGE_INDEX,
    CHANGE_ACTIVE_PAGE_INDEX,
    TOGGLE_ROW_CHECKED,
    TOGGLE_CHECKED_ALL_ROWS,
    DELETE_SELECTED_TABLE_ROWS,
    UPDATE_ORDER,
    UPDATE_INDEX_OF_SELECTED_ORDER
} from "../actions/actionTypes";

const INITIAL_STATE = {
    initialData: [],
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
    isFetchAllDataStarted: false,
    isFetchAllDataFailed: false,
}

const filterOrderNoOrPerson = (state, searchText) => {

    if (searchText)
        return state.data.filter((item) => (item.person.startsWith(searchText) || (item.id.toString().startsWith(searchText))));

    return state.initialData;
}

const applyPanelFilters = (state, panelFilters) => {

    if (
        (!panelFilters.dateFrom) &&
        (!panelFilters.dateTo) &&
        (panelFilters.filterOrderStates.length === 0) &&
        (!panelFilters.summaFrom) &&
        (!panelFilters.summaTo)
    )
        return state.initialData;


    let result = state.initialData.slice();

    if (panelFilters.dateFrom)
        result = result.filter((item) => (((item.date).getTime() - panelFilters.dateFrom.getTime()) >= 0));

    if (state.dateTo)
        result = result.filter((item) => (((item.date).getTime() - panelFilters.dateTo.getTime()) <= 0));

    if (panelFilters.filterOrderStates.length != 0)
        result = result.filter((item) => panelFilters.filterOrderStates.includes(item.state))

    if (panelFilters.summaFrom)
        result = result.filter((item) => item.summa >= parseFloat(panelFilters.summaFrom))

    if (panelFilters.summaTo)
        result = result.filter((item) => item.summa <= parseFloat(panelFilters.summaTo))

    return result;
}

const filterTableData = (state, action, filterHandler) => {
    const filtered = filterHandler(state, action.payload);
    const countPages = Math.ceil(filtered.length / state.limit);
    const rightIndex = (countPages < 5) ? countPages : 5;
    return {
        ...state,
        data: filtered,
        page: filtered.slice(0, state.limit),
        countPages: countPages,
        leftIndex: 0,
        rightIndex: rightIndex,
        activeIndex: 0,
        selectedRows: []
    }
}


const handleToggleSelectedRow = (state, action) => {
    const id = action.payload;
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

const calcTableData = (state, data) => {
    const countPages = Math.ceil(state.data.length / state.limit);
    const rightIndex = (countPages < 5) ? countPages : 5;
    return {
        ...state,
        initialData: data,
        data: data,
        page: data.slice(0, state.limit),
        countPages: countPages,
        leftIndex: 0,
        rightIndex: rightIndex,
        activeIndex: 0,
        selectedRows: []
    }
}

const deleteTableRows = (state) => {

    state.selectedRows.forEach(
        e => {
            let i = state.initialData.findIndex(item => item.id === Number(e));
            if (i != -1) {
                state.initialData.splice(i, 1);
            }
        }
    );

    return calcTableData(state, state.initialData);
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
    return state.data.findIndex(item => item.id === selectedOrderId);
}

export const tableData = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case  GENERATE_RANDOM_TABLE_DATA:
            return calcTableData(state, action.payload)

        case FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON:
            return filterTableData(state, action, filterOrderNoOrPerson)


        case GET_PAGE:
            return {
                ...state,
                page: state.data.slice(action.payload * state.limit, action.payload * state.limit + state.limit)
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

        case DELETE_SELECTED_TABLE_ROWS:
            return deleteTableRows(state);

        case APPLY_PANEL_FILTERS: {
            return filterTableData(state, action, applyPanelFilters)
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

