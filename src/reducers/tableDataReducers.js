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
    searchTextOrderNoOrPerson: '',
    dateFrom: null,
    dateTo: null,
    summaFrom: null,
    summaTo: null,
    filterOrderStates: []
}

const filterOrderNoOrPerson = (state, searchText) => {

    if (searchText)
        return state.data.filter((item) => (item.person.startsWith(searchText) || (item.id.toString().startsWith(searchText))));

    return state.initialData;
}

const updateOrderStates = (state, orderState) => {
    const index = state.filterOrderStates.indexOf(orderState);
    (index === -1) ? state.filterOrderStates.push(orderState) : state.filterOrderStates.splice(index, 1);
    return state.filterOrderStates;
}

const filterPanel = (state) => {

    if ((!state.dateFrom) && (!state.dateTo) && (state.filterOrderStates.length === 0))
        return state.initialData;

    let result = state.initialData.slice();

    if (state.dateFrom)
        result = result.filter((item) => (((item.date).getTime() - state.dateFrom.getTime()) >= 0));

    if (state.dateTo)
        result = result.filter((item) => (((item.date).getTime() - state.dateTo.getTime()) <= 0));

    if (state.filterOrderStates.length != 0)
        result = result.filter((item) => state.filterOrderStates.includes(item.state))

    if (state.summaFrom)
        result = result.filter((item) => item.summa >= state.summaFrom)

    if (state.summaTo)
        result = result.filter((item) => item.summa <= state.summaTo)

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


        case SET_SUMMA_FROM:
            return {
                ...state,
                priceFrom: action.payload,

            }

        case SET_SUMMA_TO:
            return {
                ...state,
                priceTo: action.payload
            }


        case SET_ORDER_STATE_TO_FILTER:
            return {
                ...state,
                filterOrderStates: updateOrderStates(state, action.payload)
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
