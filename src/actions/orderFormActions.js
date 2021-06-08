import {
    TOGGLE_ORDER_FORM_DATA_CHANGED,
    TOGGLE_ORDER_FORM_VISIBLE
    , UPDATE_ORDER
} from "./actionTypes";

export const toggleOrderFormVisible = () => {
    return {
        type: TOGGLE_ORDER_FORM_VISIBLE,
    }
}

export const setOrderFormDataChanged = (value) => {
    return {
        type: TOGGLE_ORDER_FORM_DATA_CHANGED,
        payload: value
    }
}

export const updateOrder = (id, person, state) => {
    return {
        type: UPDATE_ORDER,
        payload: {
            id: id,
            person: person,
            state: state
        }
    }
}
