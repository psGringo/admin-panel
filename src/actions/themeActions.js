import {SET_LIGHT_THEME} from "./actionTypes";

export const setLightTheme = (value) => {
    return {
        type: SET_LIGHT_THEME,
        payload: value
    }
}
