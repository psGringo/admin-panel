import {SET_FILTER_DATE_FROM, SET_FILTER_DATE_TO, TOGGLE_IS_FILTER_VISIBLE} from "../actions/actionTypes";

const INITIAL_STATE = {
    isVisible: true,
    dateFrom: null,
    dateTo: null,
}

function handleToggleFilterVisible(state) {
    const {isVisible} = state;
    return {
        ...state,
        isVisible: !isVisible
    }
}

export const filter = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_IS_FILTER_VISIBLE:
            return handleToggleFilterVisible(state);

        case SET_FILTER_DATE_FROM:
            return {
                ...state,
                dateFrom: action.payload
            }

        case SET_FILTER_DATE_TO:
            return {
                ...state,
                dateTo: action.payload
            }

        default:
            return state;
    }
}
