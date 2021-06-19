import {
    SET_ORDER,
    SET_ORDER_CHANGED,
    TOGGLE_ORDER_FORM_VISIBLE,
    UPDATE_CONFIRMATION_CODE_ON_ORDER_FORM,
    UPDATE_PERSON_ON_ORDER_FORM,
    UPDATE_STATE_ON_ORDER_FORM
} from "../actions/actionTypes";

const INITIAL_STATE = {
    id: 0,
    state: '',
    date: null,
    person: '',
    summa: '',
    orderItems: [],
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

        case UPDATE_PERSON_ON_ORDER_FORM:
            return {
                ...state,
                person: action.payload
            }

        case UPDATE_STATE_ON_ORDER_FORM:
            return {
                ...state,
                state: action.payload
            }

        case SET_ORDER: {
            return {
                ...state,
                id: action.payload.id,
                state: action.payload.state,
                date: action.payload.date,
                person: action.payload.person,
                summa: action.payload.summa,
                orderItems: action.payload.orderItems
            }
        }


        case SET_ORDER_CHANGED: {
            return {
                ...state,
                isDataChanged: action.payload
            }
        }

        case UPDATE_CONFIRMATION_CODE_ON_ORDER_FORM:
            return {
                ...state,
                confirmationCode: action.payload,
                isDataChanged: true
            }


        default:
            return state;
    }
}
