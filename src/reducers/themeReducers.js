import {SET_LIGHT_THEME} from "../actions/actionTypes";

const INITIAL_STATE = {
    isLight: true
}

function handleToggleTheme(state, isLightTheme) {
    const {isLight} = state;
    return {
        ...state,
        isLight: isLightTheme
    }
}

export const theme = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LIGHT_THEME:
            return handleToggleTheme(state, action.payload);

        default:
            return state;
    }
}
