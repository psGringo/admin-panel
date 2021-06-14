import {
    TOGGLE_MODAL_FORM_THEME_VISIBLE
} from "../actions/actionTypes";

const INITIAL_STATE = {
    isVisible: true,
}

export const modalFormTheme = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_MODAL_FORM_THEME_VISIBLE:
            return {
                ...state,
                isVisible: !state.isVisible
            };

        default:
            return state;
    }
}
