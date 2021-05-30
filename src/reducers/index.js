import {combineReducers} from 'redux';
import {filter} from "./filterReducers";
import {theme} from "./themeReducers";
import {orderSelect} from "./orderSelectReducers";
import {orderStates} from "./orderStateReducers";
import {tableData} from "./tableDataReducers";

export const rootReducer = combineReducers({
    filter,
    theme,
    orderSelect,
    orderStates,
    tableData
})
