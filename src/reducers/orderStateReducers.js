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

        default:
            return state;
    }
}
