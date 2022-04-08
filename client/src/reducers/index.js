import { combineReducers } from "redux";
import refresher from "department/modules/refreshModule";
import searchSelectChanger from 'search/modules/searchSelectChangeModule';


export const rootReducer = combineReducers({
    refresher,
    searchSelectChanger,
});