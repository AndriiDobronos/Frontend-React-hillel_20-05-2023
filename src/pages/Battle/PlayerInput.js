import {useState,memo} from "react";
import {useDispatch} from "react-redux";
//import {getUserName} from "../../state/battle/battle.action";
//import {handleSubmit} from "../../state/battle/battle.action";
import {getUserName} from "../../state/battle/battle.slice";
import {handleSubmit} from "../../state/battle/battle.slice";

const PlayerInput = memo(({label,onSubmit,id}) => {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')

    const handlerSubmit = (event) => {
        event.preventDefault &&
        dispatch(handleSubmit('playerOne',userName))
    }
     dispatch(getUserName(userName))


    return (
        <form  className="column" onSubmit={handlerSubmit}>
            {/*<label htmlFor={label}>{label}</label>*/}
            <label htmlFor='Player 1'>Player 1</label>
            <input
                id='Player 1'
                type="text"
                placeholder='GitHub UserName'
                autoComplete='off'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <button
                className="button"
                type={'submit'}
                disabled={!userName.length}
            >
                Submit
            </button>
        </form>
    )
})
export default PlayerInput