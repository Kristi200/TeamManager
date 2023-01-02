import './App.css';
import ShowPlayers from './components/ShowPlayers';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import AddPlayer from './components/AddPlayer';
import PlayerStats from './components/PlayerStats';
import { useState } from 'react';


const App = () => {
  const [listPageIsActive, setListPageIsActive] = useState(true);
  const [managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive] = useState(false);
  return (
    <div>
      <BrowserRouter>
      <NavBar managePlayerStatusTabIsActive={managePlayerStatusTabIsActive} setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}/>
        <Routes>
          <Route path="/players/list" element={<ShowPlayers listPageIsActive={listPageIsActive} setListPageIsActive={setListPageIsActive} setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}/>}/>
          <Route path="/players/addplayer" element={<AddPlayer listPageIsActive={listPageIsActive} setListPageIsActive={setListPageIsActive} setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}/>}/>
          <Route path="/status/game/:gameId" element={<PlayerStats setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
