import {
    GENERATE_RANDOM_TABLE_DATA,
    FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON,
    APPLY_PANEL_FILTERS, GET_PAGE,
    CHANGE_LEFT_INDEX,
    CHANGE_RIGHT_INDEX,
    CHANGE_ACTIVE_INDEX,
} from "../actions/actionTypes";

const INITIAL_STATE = {
    initialData: [],
    data: [],
    offset: 0,
    limit: 20,
    page: [],
    countPages: 0,
    countVisiblePages: 5,
    leftIndex: 0,
    rightIndex: 0,
    activeIndex: 0
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


export const tableData = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case  GENERATE_RANDOM_TABLE_DATA: {
            const countPages = Math.ceil(state.data.length / state.limit);
            const rightIndex = (countPages < 5) ? countPages : 5;
            return {
                ...state,
                initialData: action.payload,
                data: action.payload,
                page: state.data.slice(0, state.limit),
                countPages: countPages,
                rightIndex: rightIndex
            }
        }


        case FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON: {
            const filtered = filterOrderNoOrPerson(state, action.payload);
            const countPages = Math.ceil(filtered.length / state.limit);
            const rightIndex = (countPages < 5) ? countPages : 5;
            return {
                ...state,
                searchTextOrderNoOrPerson: action.payload,
                data: filtered,
                page: filtered.slice(0, state.limit),
                countPages: countPages,
                leftIndex: 0,
                rightIndex: rightIndex,
                activeIndex: 0
            }
        }

        case GET_PAGE:
            return {
                ...state,
                page: state.data.slice(action.payload * state.limit, action.payload * state.limit + state.limit)
            }

        case APPLY_PANEL_FILTERS: {
            const filtered = applyPanelFilters(state, action.payload);
            const countPages = Math.ceil(filtered.length / state.limit);
            const rightIndex = (countPages < 5) ? countPages : 5;
            return {
                ...state,
                data: filtered,
                page: filtered.slice(0, state.limit),
                countPages: countPages,
                leftIndex: 0,
                rightIndex: rightIndex,
                activeIndex: 0
            }
        }

        case CHANGE_LEFT_INDEX:
            return {
                ...state,
                leftIndex: action.payload
            }

        case CHANGE_RIGHT_INDEX:
            return {
                ...state,
                rightIndex: action.payload
            }

        case CHANGE_ACTIVE_INDEX:
            return {
                ...state,
                activeIndex: action.payload
            }


        default:
            return state;
    }
}

