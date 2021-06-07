import {
    TOGGLE_ORDER_FORM_VISIBLE
    , UPDATE_ORDER
} from "../actions/actionTypes";
import {isVisible} from "bootstrap/js/src/util";

const INITIAL_STATE = {
    isVisible: false,
    date: Date.now(),
    person: '',
    state: ''
}


export const orderForm = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_ORDER_FORM_VISIBLE: {
            return {
                ...state,
                isVisible: !state.isVisible
            };
        }


        default:
            return state;
    }
}
