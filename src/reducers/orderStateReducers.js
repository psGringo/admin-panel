import {GET_ORDER_STATES} from "../actions/actionTypes";

const INITIAL_STATE = [
    'Новый',
    'Рассчет',
    'Подтвержден',
    'Отложен',
    'Выполнен',
    'Отменен',
]

export const orderStates = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ORDER_STATES:
            return INITIAL_STATE;

        default:
            return state;
    }
}
