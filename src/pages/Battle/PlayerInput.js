import {useState,memo} from "react";

const PlayerInput = memo(({label,onSubmit,id}) => {
    const [userName, setUserName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault &&
        onSubmit(id,userName);
    }

    return (
        <form  className="column" onSubmit={handleSubmit} >
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                type="text"
                placeholder='GitHub UserName'
                autoComplete='off'
                value={userName}
                onChange={(event)=>setUserName(event.target.value)}
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