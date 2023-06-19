import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {makeBattle} from "../../requests";
import Player from "./Player";
import {useDispatch, useSelector} from "react-redux";
import {getParamsFailureAction,setWinnerAction,setLoserAction } from "../../state/battle/battle.action";
import {resetLoadingAction} from "../../state/battle/battle.action";
import {getResult} from "../../state/battle/battle.thunk";

const Results = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const loading = useSelector(state => state.battle.loading)
    const error = useSelector(state => state.battle.error)
    const winner = useSelector(state => state.battle.winner)
    const loser = useSelector(state => state.battle.loser)

//    const loading = useSelector(state => state.battleReducer.loading)
//    const error = useSelector(state => state.battleReducer.error)
//    const winner = useSelector(state => state.battleReducer.winner)
//    const loser = useSelector(state => state.battleReducer.loser)

//    const [loading, setLoading] = useState(true)
//    const [error, setError] = useState(null)
//    const [winner, setWinner] = useState(null)
//    const [loser, setLoser] = useState(null)

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        dispatch(getResult(params))
/*
       makeBattle([params.get(`playerOneName`), params.get(`playerTwoName`)])
           .then(([winner, loser]) => {
               dispatch(setWinnerAction(winner));
//               setWinner(winner);
               dispatch(setLoserAction(loser));
//               setLoser(loser);
           })
//           .catch(error => setError(error))
           .catch((error) => dispatch(getParamsFailureAction(error)))
//            .finally(() => setLoading(false))
           .finally(()=>dispatch(resetLoadingAction()))
 */
    },[])

    if (loading) {
        return <p>Loading ...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="row">
            <Player
                label='Winner'
                score={winner.score}
                profile={winner.profile}
            />
            <Player
                label='Loser'
                score={loser.score}
                profile={loser.profile}
            />
        </div>
    )
}
export default Results
