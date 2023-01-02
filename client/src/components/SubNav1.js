import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubNav1 = (props) => {
    const {listPageIsActive} = props;
    const [listTabStyle, setListTabStyle] = useState({});
    const [addPlayerTabStyle, setAddPlayerTabStyle] = useState({});
    
    const styleObjBold = {
        fontWeight: "900",
        color: "blue"
    };

    useEffect(() => {
        if(listPageIsActive){
            setListTabStyle(styleObjBold);
            setAddPlayerTabStyle({});
        }else{
            setListTabStyle({});
            setAddPlayerTabStyle(styleObjBold);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[listPageIsActive]);

    return(
        <div>
            <span style={{...listTabStyle}} className="sub-nav-text">
                <Link to="/players/list">List</Link>
            </span>
            |
            <span style={{...addPlayerTabStyle}} className="sub-nav-text">
                <Link to="/players/addplayer">Add Player </Link>
            </span>
        </div>
    )
}

export default SubNav1;