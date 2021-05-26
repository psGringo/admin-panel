import {combineReducers} from 'redux';
import {filter} from "./filterReducers";
import {theme} from "./themeReducers";
import {orderSelect} from "./orderSelectReducers";

export const rootReducer = combineReducers({
    filter,
    theme,
    orderSelect
})
