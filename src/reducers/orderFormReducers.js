import {
    SET_ORDER_FORM_DATA_CHANGED,
    TOGGLE_ORDER_FORM_VISIBLE, UPDATE_CONFIRMATION_CODE, UPDATE_FORM_DATA
    , UPDATE_ORDER
} from "../actions/actionTypes";

const INITIAL_STATE = {
    id: 0,
    state: '',
    date: null,
    person: '',
    isVisible: false,
    isDataChanged: false,
    confirmationCode: null,
}


export const orderForm = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_ORDER_FORM_VISIBLE: {
            return {
                ...state,
                isVisible: !state.isVisible
            };
        }

        case UPDATE_FORM_DATA:
            return {
                ...state,
                id: action.payload.id,
                state: action.payload.state,
                date: action.payload.date,
                person: action.payload.person
            }

        case SET_ORDER_FORM_DATA_CHANGED: {
            return {
                ...state,
                isDataChanged: action.payload
            }
        }

        case UPDATE_CONFIRMATION_CODE:
            return {
                ...state,
                confirmationCode: action.payload,
                isDataChanged: true
            }


        default:
            return state;
    }
}
