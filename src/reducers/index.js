import {combineReducers} from 'redux';
import {filter} from "./filterReducers";
import {theme} from "./themeReducers";
import {orderSelect} from "./orderSelectReducers";
import {tableData} from "./tableDataReducers";
import {orderStates} from "./orderStateReducers";
import {modalFormDelete} from "./modalFormDeleteReducers";
import {orderForm} from "./orderFormReducers";
import {loadIndication} from "./loadIndicationReducers";
import {tableDataSortDirections} from "./tableDataSortDirection";
import {modalFormTheme} from "./modalFormThemeReducers";

export const rootReducer = combineReducers({
    tableData,
    tableDataSortDirections,
    filter,
    theme,
    orderSelect,
    orderStates,
    modalFormDelete,
    modalFormTheme,
    orderForm,
    loadIndication
})
