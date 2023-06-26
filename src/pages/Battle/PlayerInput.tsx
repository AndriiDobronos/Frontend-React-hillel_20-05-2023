import {useState, memo, ChangeEvent, FormEvent, ReactElement,FC} from "react";
import {useDispatch} from "react-redux";
//import {getUserName} from "../../state/battle/battle.action";
//import {handleSubmit} from "../../state/battle/battle.action";
import {getUserName} from "../../state/battle/battle.slice";
import {handleSubmit} from "../../state/battle/battle.slice";
interface IProps {
    id:string;
    label:string;
    onSubmit: (id:string, userName:string)=>void;
}

const PlayerInput:FC<IProps> = memo(({label,onSubmit,id}):ReactElement  => {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState<string>('')

    const handlerSubmit = (event: FormEvent): void => {
        event.preventDefault &&
        dispatch(handleSubmit(_,_,'playerOne',userName))
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
                onChange={(event: ChangeEvent<HTMLInputElement>):void => setUserName(event.target.value)}
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