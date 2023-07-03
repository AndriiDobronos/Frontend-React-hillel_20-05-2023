
import {createAsyncThunk} from "@reduxjs/toolkit";
import {makeBattle} from "../../requests.ts";
import {setWinnerAction, setLoserAction, getParamsFailureAction} from "./battle.slice";
import {resetLoadingAction} from "./battle.slice";

export const getResult = createAsyncThunk(
    'battle/getResult',
    async (params:{[key:string]:any} ,{rejectWitchValue,dispatch}):Promise<any> => {
        try {
            return await makeBattle([params.get(`playerOneName`), params.get(`playerTwoName`)])
                .then(([winner, loser]:[{score:number ,profile:{avatar_url:string ,login:string }}]):void => {
                dispatch(setWinnerAction(winner))
                dispatch(setLoserAction(loser))
                .catch((error) => dispatch(getParamsFailureAction(error)))
                .finally(() => dispatch(resetLoadingAction))
            })
        } catch (error) {
            return rejectWitchValue(error);
        }
    },);