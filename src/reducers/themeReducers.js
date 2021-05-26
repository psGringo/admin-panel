import {TOGGLE_THEME} from "../actions/actionTypes";

const INITIAL_STATE = {
    isLight: true
}

function handleToggleTheme(state) {
    const {isLight} = state;
    return {
        ...state,
        isLight: !isLight
    }
}

export const theme = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return handleToggleTheme(state);

        default:
            return state;
    }
}
