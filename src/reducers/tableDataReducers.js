import {GET_TABLE_DATA, GENERATE_RANDOM_TABLE_DATA} from "../actions/actionTypes";

const INITIAL_STATE = {
    data: []
}

export const tableData = (state = [], action) => {
    switch (action.type) {

        case  GENERATE_RANDOM_TABLE_DATA: {
            return {
                ...state,
                data: action.payload
            }
        }

        case GET_TABLE_DATA:
            return INITIAL_STATE;


        default:
            return state;
    }
}
