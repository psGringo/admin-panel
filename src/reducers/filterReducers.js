import {
    TOGGLE_IS_FILTER_VISIBLE
} from "../actions/actionTypes";

const INITIAL_STATE = {
    isVisible: true,
    dateFrom: null,
    dateTo: null,
    needFilterFromPanel: false
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



        default:
            return state;
    }
}
