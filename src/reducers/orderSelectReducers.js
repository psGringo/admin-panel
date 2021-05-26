import {TOGGLE_ORDER_SELECT} from "../actions/actionTypes";

const INITIAL_STATE = {
    isExpanded: false
}

function handleOrderSelect(state) {
    const {isExpanded} = state;
    return {
        ...state,
        isExpanded: !isExpanded
    }
}

export const orderSelect = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_ORDER_SELECT:
            return handleOrderSelect(state);

        default:
            return state;
    }
}
