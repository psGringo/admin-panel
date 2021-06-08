import {
    TOGGLE_ORDER_FORM_DATA_CHANGED,
    TOGGLE_ORDER_FORM_VISIBLE
    , UPDATE_ORDER
} from "../actions/actionTypes";

const INITIAL_STATE = {
    isVisible: false,
    date: Date.now(),
    person: '',
    state: '',
    isDataChanged: false
}


export const orderForm = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_ORDER_FORM_VISIBLE: {
            return {
                ...state,
                isVisible: !state.isVisible
            };
        }

        case TOGGLE_ORDER_FORM_DATA_CHANGED: {
            return {
                ...state,
                isDataChanged: !state.isDataChanged
            }
        }

        default:
            return state;
    }
}
