import {
    SET_FILTER_DATE_FROM,
    SET_FILTER_DATE_TO,
    TOGGLE_IS_FILTER_VISIBLE, TOGGLE_MODAL_FORM_DELETE_VISIBLE
} from "./actionTypes";

export const toggleModalWindowDeleteVisible = () => {
    return {
        type: TOGGLE_MODAL_FORM_DELETE_VISIBLE
    }
}
