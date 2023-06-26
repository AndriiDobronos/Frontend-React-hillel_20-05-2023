
import {createAsyncThunk} from "@reduxjs/toolkit";
import {makeBattle} from "../../requests";
import {setWinnerAction, setLoserAction, getParamsFailureAction} from "./battle.slice";
import {resetLoadingAction} from "./battle.slice";
import {IRepos} from "../types/popular.types";

export const getResult = createAsyncThunk(
    'battle/getResult',
    async (params:IRepos ,{rejectWitchValue,dispatch}):Promise<any> => {
        try {
            return await dispatch(makeBattle([params.get(`playerOneName`), params.get(`playerTwoName`)]))
                (([winner, loser]:[string,string]) => {
                dispatch(setWinnerAction(winner))
                dispatch(setLoserAction(loser))
                .catch((error) => dispatch(getParamsFailureAction(error)))
                .finally(() => dispatch(resetLoadingAction()))
            })
        } catch (error) {
            return rejectWitchValue(error);
        }
    },);