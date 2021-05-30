import {FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON, GENERATE_RANDOM_TABLE_DATA} from "./actionTypes";
import {GenerateData} from "../components/DataGenerator/DataGenereator";

export const generateRandomTableData = () => {
    return {
        type: GENERATE_RANDOM_TABLE_DATA,
        payload: GenerateData(200)
    }
}

export const filterTableDataByOrderNoOrPerson = (data) => {
    return {
        type: FILTER_TABLE_DATA_BY_ORDER_NO_OR_PERSON,
        payload: data
    }
}
