import {combineReducers} from 'redux';
import {filter} from "./filterReducers";
import {theme} from "./themeReducers";
import {orderSelect} from "./orderSelectReducers";
import {tableData} from "./tableDataReducers";
import {orderStates} from "./orderStateReducers";

export const rootReducer = combineReducers({
    filter,
    theme,
    orderSelect,
    orderStates,
    tableData
})
