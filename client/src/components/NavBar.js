import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const {managePlayerStatusTabIsActive} = props;
  const [managePlayerTabStyle, setManagePlayerTabStyle] = useState({});
  const [managePlayerStatusTabStyle, setManagePlayerStatusTabStyle] = useState({});
  const styleObjBold = {
    fontWeight: "900",
    color: "blue"
  };

  useEffect(() => {
    if(managePlayerStatusTabIsActive){
      setManagePlayerStatusTabStyle(styleObjBold);
      setManagePlayerTabStyle({});
    }else{
      setManagePlayerStatusTabStyle({});
      setManagePlayerTabStyle(styleObjBold);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[managePlayerStatusTabIsActive])
  return (
    <div className='navBar'>
        <Link to="/players/list" style={managePlayerTabStyle}>Manage players</Link> 
        |
        <Link to="/status/game/1" style={managePlayerStatusTabStyle}>Manage Players Status</Link>
    </div>
  )
}

export default NavBar