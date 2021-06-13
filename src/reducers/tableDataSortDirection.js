import {TOGGLE_TABLE_DATA_SORT} from "../actions/actionTypes";

const asc = 'asc';
const desc = 'desc';

const INITIAL_STATE = {
    date: asc,
    state: asc,
    positions: asc,
    summa: asc,
    person: asc
}

const handleToggleSort = (state, action) => {

    const currentValue = state[`${action.payload}`];

    alert(state[`${action.payload}`]);
    let sortDirection;

    switch (currentValue) {

        case asc: {
            sortDirection = desc;
            break
        }

        case desc: {
            sortDirection = asc;
            break
        }

        default:
            sortDirection = asc;
    }

    state[`${action.payload}`] = sortDirection;

    return {
        ...state
    }

}

export const tableDataSortDirections = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_TABLE_DATA_SORT:
            return handleToggleSort(state, action);

        default:
            return state;
    }
}
