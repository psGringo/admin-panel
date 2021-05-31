import {
    SET_FILTER_DATE_FROM, SET_FILTER_DATE_TO, SET_ORDER_STATE_TO_FILTER, SET_SUMMA_FROM, SET_SUMMA_TO,
    TOGGLE_IS_FILTER_VISIBLE
} from "../actions/actionTypes";

const INITIAL_STATE = {
    isVisible: true,
    searchTextOrderNoOrPerson: '',
    dateFrom: null,
    dateTo: null,
    summaFrom: null,
    summaTo: null,
    filterOrderStates: []
}

function handleToggleFilterVisible(state) {
    const {isVisible} = state;
    return {
        ...state,
        isVisible: !isVisible
    }
}

const updateOrderStates = (state, orderState) => {
    const index = state.filterOrderStates.indexOf(orderState);
    (index === -1) ? state.filterOrderStates.push(orderState) : state.filterOrderStates.splice(index, 1);
    return state.filterOrderStates;
}

export const filter = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_IS_FILTER_VISIBLE:
            return handleToggleFilterVisible(state);

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
                summaFrom: action.payload,

            }

        case SET_SUMMA_TO:
            return {
                ...state,
                summaTo: action.payload
            }


        case SET_ORDER_STATE_TO_FILTER:
            return {
                ...state,
                filterOrderStates: updateOrderStates(state, action.payload)
            }

        default:
            return state;
    }
}
