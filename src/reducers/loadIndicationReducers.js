import {TOGGLE_LOAD_INDICATION_VISIBLE} from "../actions/actionTypes";

const INITIAL_STATE = {
    isVisible: false
}

export const loadIndication = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_LOAD_INDICATION_VISIBLE:
            return {
                ...state,
                isVisible: !state.isVisible
            };

        default:
            return state;
    }
}
