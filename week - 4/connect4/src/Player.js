
import './App.css';
import Game from './Game';
import React, { useState } from 'react';

function Player() {

    return (
      <div className="App">

        <Search />
      </div>
    );
  
}

const Search = () => {
  const [show, setShow] = useState(false)
  const onClick = () => setShow(true)

  const [player1name, changep1Name] = useState("");
  const [player2name, changep2Name] = useState("");

  return (
    <div>
      <br></br>
      <label>Player 1 Name (Red) : </label>
      <input type="text" onChange={e => changep1Name(e.target.value)}></input>
      <br></br>
      <label>Player 2 Name (Black) : </label>
      <input type="text" onChange={e => changep2Name(e.target.value)}></input>
      <br></br>
      <br></br>
      <input className="button" type="button" value="Start Game" onClick={onClick} />

      { show ? <Game p1name={player1name} p2name={player2name}/> : null }
    </div>
  )
}


export default Player;