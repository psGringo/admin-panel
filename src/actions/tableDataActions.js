import {GENERATE_RANDOM_TABLE_DATA, GET_TABLE_DATA} from "./actionTypes";
import {GenerateData} from "../components/DataGenerator/DataGenereator";

export const getTableData = () => {
    return {
        type: GET_TABLE_DATA
    }
}

export const generateRandomTableData = () => {
    return {
        type: GENERATE_RANDOM_TABLE_DATA,
        payload: GenerateData(200)
    }
}
