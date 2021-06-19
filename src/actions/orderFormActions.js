import {
    UPDATE_PERSON_ON_ORDER_FORM,
    SET_ORDER_CHANGED,
    TOGGLE_ORDER_FORM_VISIBLE, UPDATE_CONFIRMATION_CODE_ON_ORDER_FORM, UPDATE_FORM_DATA,
    UPDATE_STATE_ON_ORDER_FORM
} from "./actionTypes";
import {toggleLoadIndicationVisible} from "./loadIndicationActions";
import {fetchWrapper} from "../api/fetchWrapper";
import {setOrder} from "./tableDataActions";

export const toggleOrderFormVisible = () => {
    return {
        type: TOGGLE_ORDER_FORM_VISIBLE,
    }
}

export const setOrderFormDataChanged = (value) => {
    return {
        type: SET_ORDER_CHANGED,
        payload: value
    }
}

export const updateConfirmationCode = (value) => {
    return {
        type: UPDATE_CONFIRMATION_CODE_ON_ORDER_FORM,
        payload: value
    }
}

export const updatePersonOnOrderForm = (value) => {
    return {
        type: UPDATE_PERSON_ON_ORDER_FORM,
        payload: value
    }
}

export const updateStateOnOrderForm = (value) => {
    return {
        type: UPDATE_STATE_ON_ORDER_FORM,
        payload: value
    }
}

export const updateOrder = (data) => (dispatch) => {
    dispatch(toggleLoadIndicationVisible());
    fetchWrapper.post('api/updateOrder/', data)
        .then(data => {
                dispatch(setOrder(data.order));
                dispatch(toggleLoadIndicationVisible());
                dispatch(toggleOrderFormVisible())
            }
        )
        .catch(error => {
            dispatch(toggleLoadIndicationVisible());
            alert(error)
        });
}

export const updateFormData = (id, state, date, person) => {
    return {
        type: UPDATE_FORM_DATA,
        payload: {
            id: id,
            state: state,
            date: date,
            person: person
        }
    }
}
