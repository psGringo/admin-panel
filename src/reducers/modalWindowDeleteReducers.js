import {
    SET_FILTER_DATE_FROM, SET_FILTER_DATE_TO, SET_ORDER_STATE_TO_FILTER, SET_SUMMA_FROM, SET_SUMMA_TO,
    TOGGLE_IS_FILTER_VISIBLE, TOGGLE_MODAL_WINDOW_DELETE_VISIBLE
} from "../actions/actionTypes";
import {isVisible} from "bootstrap/js/src/util";

const INITIAL_STATE = {
    isVisible: false,
}



export const modalWindowDelete = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_MODAL_WINDOW_DELETE_VISIBLE:
            return {
                ...state,
                isVisible: !state.isVisible
            };

        default:
            return state;
    }
}
