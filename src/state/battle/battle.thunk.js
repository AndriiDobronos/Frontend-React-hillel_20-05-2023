
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