import {combineReducers} from 'redux';
import {filter} from "./filterReducers";
import {theme} from "./themeReducers";
import {orderSelect} from "./orderSelectReducers";
import {tableData} from "./tableDataReducers";
import {orderStates} from "./orderStateReducers";
import {modalWindowDelete} from "./modalWindowDeleteReducers";
import {orderForm} from "./orderFormReducers";
import {loadIndication} from "./loadIndicationReducers";
import {tableDataSortDirections} from "./tableDataSortDirection";

export const rootReducer = combineReducers({
    tableData,
    tableDataSortDirections,
    filter,
    theme,
    orderSelect,
    orderStates,
    modalWindowDelete,
    orderForm,
    loadIndication
})
