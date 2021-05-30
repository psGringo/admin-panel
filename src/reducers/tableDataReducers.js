import {
    GENERATE_RANDOM_TABLE_DATA,
    FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON,
    SET_FILTER_DATE_FROM, SET_FILTER_DATE_TO, APPLY_PANEL_FILTERS
} from "../actions/actionTypes";

const INITIAL_STATE = {
    initialData: [],
    data: [],
    searchTextOrderNoOrPerson: '',
    dateFrom: null,
    dateTo: null
}

const filterOrderNoOrPerson = (state, searchText) => {

    if (searchText)
        return state.data.filter((item) => (item.person.startsWith(searchText) || (item.id.toString().startsWith(searchText))));

    return state.initialData;
}

const filterPanel = (state) => {

    if ((!state.dateFrom) && (!state.dateTo))
      return state.initialData;

    let result = [];

    if (state.dateFrom)
        result = state.data.filter((item) => (((item.date).getTime() - state.dateFrom.getTime()) >= 0));

    if (state.dateTo)
        result = state.data.filter((item) => (((item.date).getTime() - state.dateTo.getTime()) <= 0));

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

        case SET_FILTER_DATE_FROM:
            return {
                ...state,
                dateFrom: action.payload,

            }

        case SET_FILTER_DATE_TO:
            return {
                ...state,
                dateTo: action.payload
            }

        case APPLY_PANEL_FILTERS:
            return {
                ...state,
                data: filterPanel(state)
            }

        default:
            return state;
    }
}
