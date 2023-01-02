import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import SubNav1 from './SubNav1';
const AddPlayer = (props) => {
    const [beError, setBeError] = useState("");
    const navigate = useNavigate();
    const [player, setPlayer] = useState({
        name: "",
        position: ""
    })    
    const {listPageIsActive, setListPageIsActive,setManagePlayerStatusTabIsActive} = props;

    useEffect(() => {
        setListPageIsActive(false);
        setManagePlayerStatusTabIsActive(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const onChangeHandler = (e) => {
        setPlayer({
            ...player,[e.target.name]:e.target.value
        })
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/players',{
            ...player
        })
        .then((results) => {
            console.log(results.data)
            navigate('/players/list')
        })
        .catch((error) => {
            console.log(error.response.data.errors.name.message);
            setBeError(error.response.data.errors.name.message)
        })
    }
    
    return (
    <div className='add'>
        <SubNav1 listPageIsActive={listPageIsActive} setListPageIsActive={setListPageIsActive}/>
        <form className='container' onSubmit={onSubmitHandler}>
            <div className='inside'>
                <h1>Add Player</h1>
                <div>
                    <label className='form-label'>Player Name:</label>
                    <input 
                        className='form-input'
                        type="text" 
                        name="name" 
                        placeholder='Enter Player Name'
                        onChange={onChangeHandler}
                    />
                </div>
                    {(beError) ? (<span className='error'>*{beError}</span>) :""}
                <div>
                    <label className='form-label'>Prefered Position:</label>
                    <input 
                        className='form-input'
                        type="text" 
                        name="position" 
                        placeholder='Enter Player position'
                        onChange={onChangeHandler}
                    />
                </div>
                <button type='submit' className='form-btn'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddPlayer