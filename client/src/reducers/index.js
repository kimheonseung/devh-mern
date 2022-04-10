import { combineReducers } from "redux";
import refresher from "department/modules/refreshModule";
import searchSelectChanger from 'search/modules/searchSelectChangeModule';
import auth from 'common/modules/authModule';

export const rootReducer = combineReducers({
    refresher,
    searchSelectChanger,
    auth,
});