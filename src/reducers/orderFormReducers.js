import {
    TOGGLE_MODAL_WINDOW_DELETE_VISIBLE, TOGGLE_ORDER_FORM_VISIBLE
} from "../actions/actionTypes";
import {isVisible} from "bootstrap/js/src/util";

const INITIAL_STATE = {
    isVisible: false,
}


export const orderForm = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_ORDER_FORM_VISIBLE:
        {
            return {
                ...state,
                isVisible: !state.isVisible
            };
        }


        default:
            return state;
    }
}
