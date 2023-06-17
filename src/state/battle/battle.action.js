import {BATTLE} from "./battle.constants";

export const handleSubmit = () => ({
    type: BATTLE.SET_PLAYER_DATA,
})

export const handleSubmit2 = () => ({
    type: BATTLE.SET_PLAYER2_DATA,
})

export const handleReset = () => ({
    type: BATTLE.HANDLE_RESET,
})

export const handleReset2 = () => ({
    type: BATTLE.HANDLE_RESET2,
})

export const getUserName = (payload) => ({
    type: BATTLE.GET_USERNAME,
    payload
})

export const getUserName2 = (payload) => ({
    type: BATTLE.GET_USERNAME2,
    payload
})

export const setLoadingAction = () => ({
    type: BATTLE.SET_LOADING,
})

export const resetLoadingAction = () => ({
    type: BATTLE.RESET_LOADING,
})

export const setWinnerAction = (payload) => ({
    type: BATTLE.SET_WINNER,
    payload
})

export const setLoserAction = (payload) => ({
    type: BATTLE.SET_LOSER,
    payload
})

export const getParamsSuccessAction = (payload) => ({
    type: BATTLE.GET_PARAMS_SUCCESS,
    payload
})

export const getParamsFailureAction = (payload) => ({
    type: BATTLE.GET_PARAMS_FAILURE,
    payload
})
