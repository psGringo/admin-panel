import {
    TOGGLE_MODAL_FORM_DELETE_VISIBLE
} from "../actions/actionTypes";

const INITIAL_STATE = {
    isVisible: false,
}

export const modalFormDelete = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_MODAL_FORM_DELETE_VISIBLE:
            return {
                ...state,
                isVisible: !state.isVisible
            };

        default:
            return state;
    }
}
