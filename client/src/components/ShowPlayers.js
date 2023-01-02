import  {useState,useEffect}  from 'react';
import axios from 'axios';
import SubNav1 from './SubNav1';

const ShowPlayers = (props) => {
    const [players, setPlayers] = useState([]);
    const {listPageIsActive, setListPageIsActive,setManagePlayerStatusTabIsActive} = props;
    
    useEffect(() => {
        setListPageIsActive(true);
        setManagePlayerStatusTabIsActive(false);
        axios.get('http://localhost:8000/api/players')
        .then((results) => {
            setPlayers(results.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const deleteHandler = (playerid) => {
        axios.delete(`http://localhost:8000/api/players/${playerid}`)
        .then((res) => {
            console.log(res)
            const newList = players.filter((player,index) => player._id !== playerid)
            setPlayers(newList)
        })
        .catch((error) => console.log(error))
    }
    
    return(
        <div className='list'>  
            <SubNav1 listPageIsActive={listPageIsActive} setListPageIsActive={setListPageIsActive}/>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th style={{minWidth: "150px"}}>Team Name</th>
                            <th style={{minWidth: "250px"}}>Prefered Position</th>
                            <th style={{minWidth: "150px"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((player,index) => (
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td><button className='list-btn' onClick={() => deleteHandler(player._id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
} 

export default ShowPlayers;