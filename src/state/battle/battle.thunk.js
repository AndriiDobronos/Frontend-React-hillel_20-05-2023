/*
import {
    setWinnerAction,
    setLoserAction,
    getParamsFailureAction, resetLoadingAction
} from "./battle.reducer";
import {makeBattle} from "../../requests.js";

export const getResult = (params) => (dispatch) => {
    makeBattle([params.get(`playerOneName`), params.get(`playerTwoName`)])
        .then(([winner, loser]) => {
            dispatch(setWinnerAction(winner));
            dispatch(setLoserAction(loser));
        })
        .catch((error) => dispatch(getParamsFailureAction(error)))
        .finally(()=>dispatch(resetLoadingAction()))
}*/
/*
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getReposRequest } from "../../requests.js";
import {updateLanguage} from "./popular.slice";

export const getRepos = createAsyncThunk(
    'popular/getRepos',
    async (selectedLanguage ,{rejectWitchValue,dispatch}) => {
        dispatch(updateLanguage(selectedLanguage));
        try {
            return await getReposRequest(selectedLanguage);
        } catch (error) {
            return rejectWitchValue(error);
        }
    },);

    const  getResult = (async () => {
    return  await makeBattle([params.get(`playerOneName`), params.get(`playerTwoName`)])
        .then(([winner, loser]) => {
            dispatch(setWinnerAction(winner));
            dispatch(setLoserAction(loser));
        })
        .catch((error) => dispatch(getParamsFailureAction(error)))
        .finally(() => dispatch(resetLoadingAction()))
    })()
*/
import {createAsyncThunk} from "@reduxjs/toolkit";
import {makeBattle} from "../../requests.js";
import {setWinnerAction, setLoserAction, getParamsFailureAction} from "./battle.slice";
import {resetLoadingAction} from "./battle.slice";

export const getResult = createAsyncThunk(

    'battle/getResult',
    async (params ,{rejectWitchValue,dispatch}) => {
        try {
            return await dispatch(makeBattle([params.get(`playerOneName`), params.get(`playerTwoName`)]))
                .then(([winner, loser]) => {
                dispatch(setWinnerAction(winner))
                dispatch(setLoserAction(loser))
                .catch((error) => dispatch(getParamsFailureAction(error)))
                .finally(() => dispatch(resetLoadingAction()))
            })
        } catch (error) {
            return rejectWitchValue(error);
        }
    },);
