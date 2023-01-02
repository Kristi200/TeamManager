import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
const SubNav2 = (props) => {
  const {gameId} = props;
  const [game1TabStyle, setGame1TabStyle] = useState({});
  const [game2TabStyle, setGame2TabStyle] = useState({});
  const [game3TabStyle, setGame3TabStyle] = useState({});
  const styleObjBold = {
    fontWeight: "900",
  };

  useEffect(() => {
    if(gameId === "1"){
        setGame1TabStyle(styleObjBold);
        setGame2TabStyle({});
        setGame3TabStyle({});
    }else if(gameId === "2"){
        setGame1TabStyle({});
        setGame2TabStyle(styleObjBold);
        setGame3TabStyle({});
    }else{
        setGame1TabStyle({});
        setGame2TabStyle({});
        setGame3TabStyle(styleObjBold);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[gameId])
  
  return (
    <div>
        <span style={game1TabStyle} className="sub-nav-text">
            <Link to="/status/game/1">Game 1</Link>
        </span>
        <span style={game2TabStyle} className="sub-nav-text">
            <Link to="/status/game/2">Game 2</Link>
        </span>
        <span style={game3TabStyle} className="sub-nav-text">
            <Link to="/status/game/3">Game 3</Link>
        </span>
    </div>
  )
}

export default SubNav2;