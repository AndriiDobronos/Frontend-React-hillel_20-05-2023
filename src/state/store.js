//1. Store - object with data
//2.Actions {type: '', payload} Action creator () =>({type: '', payload}) - намерения о изменениях
//3.Reducer - function which return new state Store

import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import rootReducer from "./root.reducer";

const logger = createLogger({
    collapsed: true
})
const store = createStore(rootReducer, applyMiddleware(thunk,logger));

export default store;