import {GENERATE_RANDOM_TABLE_DATA, FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON} from "../actions/actionTypes";

const INITIAL_STATE = {
    data: [],
    searchTextOrderNoOrPerson: ''
}

export const tableData = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case  GENERATE_RANDOM_TABLE_DATA: {
            return {
                ...state,
                data: action.payload
            }
        }

        case FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON: {
            return {
                ...state,
                searchTextOrderNoOrPerson: action.payload
            }
        }

        default:
            return state;
    }
}
