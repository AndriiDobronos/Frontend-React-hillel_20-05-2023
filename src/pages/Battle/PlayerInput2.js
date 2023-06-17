import {useState,memo} from "react";
import {useDispatch} from "react-redux";
import {getUserName2, handleSubmit2} from "../../state/battle/battle.action";

const PlayerInput2 = memo(() => {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')

    const handlerSubmit = (event) => {
        event.preventDefault &&
        dispatch(handleSubmit2('playerTwo',userName));
    }

    dispatch(getUserName2(userName))

    return (
        <form  className="column" onSubmit={handlerSubmit}>
            <label htmlFor='Player 2'>Player 2</label>
            <input
                id='Player 2'
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
export default PlayerInput2

