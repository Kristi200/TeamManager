import  {useState,useEffect}  from 'react';
import axios from 'axios';
import SubNav2 from './SubNav2';

const PlayerStats = (props) => {
    const [playersList, setPlayersList] = useState([]);
    const {setManagePlayerStatusTabIsActive} = props;
    const [triggerGetAllRequestDummy, setTriggerGetAllRequestDummy] = useState(false);
    const gameId = "1";
    useEffect(() => {
        setManagePlayerStatusTabIsActive(true)
        axios.get('http://localhost:8000/api/players')
        .then((results) => {
            console.log(results.data)
            setPlayersList(results.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[triggerGetAllRequestDummy])
    
    const handleChangeGameStatus = (idFromBelow, newStatus) => {
        let putData = {};
        if(gameId === "1"){
            putData.gameOneStatus = newStatus;
            console.log(gameId)
        }else if(gameId === "2"){
            putData.gameTwoStatus = newStatus;
        }else{
            putData.gameThreeStatus = newStatus;
        }
        axios.put(`http://localhost:8000/api/players/${idFromBelow}`,putData)
        .then((response) => {
            console.log(response);
            setTriggerGetAllRequestDummy(!triggerGetAllRequestDummy);
        })
        .catch((err) => console.log(err.response))
    }
    return(
        <div className='list'>
            <SubNav2 gameId={gameId}/>
            <h1>Player Status - Game {props.gameId}</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th style={{minWidth: "150px"}}>Team Name</th>
                            <th style={{minWidth: "150px"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Condition render for gameid === 1 */}
                        {gameId === "1" ? (
                            playersList.map((player,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{player.name}</td>
                                        <td>
                                            <button className={`${player.gameOneStatus === "Playing" ? "stats-btn-green" : ""}`} onClick={() => handleChangeGameStatus(player._id, "Playing")}>Playing</button>
                                            <button className={`${player.gameOneStatus === "Not Playing" ? "stats-btn-red" : ""}`} onClick={() => handleChangeGameStatus(player._id, "Not Playing")}>Not Playing</button>
                                            <button className={`${player.gameOneStatus === "Undecided" ? "stats-btn-yellow" : ""}`} onClick={() => handleChangeGameStatus(player._id, "Undecided")}>Undecided</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (<></>)
                        }
                        {/* Condition render for gameid === 2 */}
                        {gameId === "2" ? (
                            playersList.map((player,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{player.name}</td>
                                        <td>
                                            <button className={`${player.gameTwoStatus === "Playing" ? "stats-btn-green" : ""}`} onClick={() => handleChangeGameStatus(player._id, "Playing")}>Playing</button>
                                            <button className={`${player.gameTwoStatus === "Not Playing" ? "stats-btn-red" : ""}`} onClick={() => handleChangeGameStatus(player._id, "Not Playing")}>Not Playing</button>
                                            <button className={`${player.gameTwoStatus === "Undecided" ? "stats-btn-yellow" : ""}`} onClick={() => handleChangeGameStatus(player._id, "Undecided")}>Undecided</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (<></>)
                        }
                        {/* Condition render for gameid === 3 */}
                        {gameId === "3" ? (
                            playersList.map((player,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{player.name}</td>
                                        <td>
                                            <button className={`${player.gameThreeStatus === "Playing" ? "stats-btn-green" : ""}`} onClick={() => handleChangeGameStatus(player._id, "Playing")}>Playing</button>
                                            <button className={`${player.gameThreeStatus === "Not Playing" ? "stats-btn-red" : ""}`} onClick={() => handleChangeGameStatus(player._id, "Not Playing")}>Not Playing</button>
                                            <button className={`${player.gameThreeStatus === "Undecided" ? "stats-btn-yellow" : ""}`} onClick={() => handleChangeGameStatus(player._id, "Undecided")}>Undecided</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (<></>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
} 

export default PlayerStats;