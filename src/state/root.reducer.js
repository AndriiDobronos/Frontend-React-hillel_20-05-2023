import {combineReducers} from "redux";
import {popularReducer} from "./popular/popular.reducer.js";
import {battleReducer } from "./battle/battle.reducer";

export default combineReducers({
    popularReducer,
    battleReducer
})