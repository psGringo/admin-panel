import {
    GENERATE_RANDOM_TABLE_DATA,
    FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON,
    SET_FILTER_DATE_FROM,
    SET_FILTER_DATE_TO,
    APPLY_PANEL_FILTERS,
    SET_ORDER_STATE_TO_FILTER, SET_SUMMA_FROM, SET_SUMMA_TO
} from "../actions/actionTypes";

const INITIAL_STATE = {
    initialData: [],
    data: [],
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
        result = result.filter((item) => item.summa >= panelFilters.summaFrom)

    if (panelFilters.summaTo)
        result = result.filter((item) => item.summa <= panelFilters.summaTo)

    return result;
}


export const tableData = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case  GENERATE_RANDOM_TABLE_DATA: {
            return {
                ...state,
                initialData: action.payload,
                data: action.payload
            }
        }

        case FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON: {
            return {
                ...state,
                searchTextOrderNoOrPerson: action.payload,
                data: filterOrderNoOrPerson(state, action.payload)
            }
        }

        case APPLY_PANEL_FILTERS:
            return {
                ...state,
                data: applyPanelFilters(state, action.payload)
            }


        default:
            return state;
    }
}
