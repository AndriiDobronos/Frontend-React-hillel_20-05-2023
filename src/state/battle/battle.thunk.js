import {
    setWinnerAction,
    setLoserAction,
    getParamsFailureAction, resetLoadingAction
} from "./battle.action";
import {makeBattle} from "../../requests.js";

export const getResult = (params) => (dispatch) => {
    makeBattle([params.get(`playerOneName`), params.get(`playerTwoName`)])
        .then(([winner, loser]) => {
            dispatch(setWinnerAction(winner));
            dispatch(setLoserAction(loser));
        })
        .catch((error) => dispatch(getParamsFailureAction(error)))
        .finally(()=>dispatch(resetLoadingAction()))
}
