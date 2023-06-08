import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import {useState} from "react";
import {Link} from "react-router-dom";

const Battle = () => {
    const [playerData,setPlayerData] = useState({
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    })

    const handleSubmit = (id,userName) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: userName,
            [`${id}Image`]: `https://github.com/${userName}.png?size200`,
        }))
    }

    const handleReset = (id) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: '',
            [`${id}Image`]: null,
        }))
    }

    return (
        <div>
            <div className='row'>
                {playerData.playerOneImage ?
                    <div className='column'>
                        <PlayerPreview
                            avatar={playerData.playerOneImage}
                            username={playerData.playerOneName}
                        >
                            <button className="reset" onClick={()=>handleReset('playerOne')} >Reset</button>
                        </PlayerPreview>
                    </div> :
                    <PlayerInput
                        id='playerOne'
                        label='Player 1'
                        onSubmit={handleSubmit}
                    />}
                {playerData.playerTwoImage ?
                    <div className='column'>
                        <PlayerPreview
                            avatar={playerData.playerTwoImage}
                            username={playerData.playerTwoName}
                        >
                            <button className="reset" onClick={()=>handleReset('playerTwo')} >Reset</button>
                        </PlayerPreview>
                    </div> :
                    <PlayerInput
                        id='playerTwo'
                        label='Player 2'
                        onSubmit={handleSubmit}
                    />}
            </div>
            {playerData.playerOneImage && playerData.playerTwoImage ?
            <Link to={{
                pathname:'results',
                search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
            }} className='button'
                  playerData={playerData}
            >
                Battle
            </Link> :
            null
            }
        </div>
    )
}
export default Battle;