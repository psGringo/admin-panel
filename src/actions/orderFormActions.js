import {
    TOGGLE_ORDER_FORM_VISIBLE
    , UPDATE_ORDER
} from "./actionTypes";

export const toggleOrderFormVisible = () => {
    return {
        type: TOGGLE_ORDER_FORM_VISIBLE,
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
