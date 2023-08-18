import React, { useState, useRef } from "react";

import Header from './Header';
import Player from './Player';
import AddPlayerForm from "./AddPlayerForm";

const App = () => {

  /****************************************************************
   * APPLICATION STATE
   ***************************************************************/
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);

  const nextPlayerId = useRef(5)

  /****************************************************************
   * FUNCTIONS TO PASS DOWN
   ****************************************************************/
  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }


  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player => {
      if (player.id === id) {
        return {
          name: player.name,
          score: player.score + delta,
          id: player.id
        }
      }
      return player;
    }));

  };

  const handleAddPlayer = (name) => {
    
    setPlayers(prevPlayers => [
      ...prevPlayers,
      {
        name: name,
        score: 0,
        id: nextPlayerId.current
      }
    ])

    nextPlayerId.current += 1

  }

/*****************************************************************
 * RENDER
 ****************************************************************/
  return (
    <div className="scoreboard">
      <Header
        players={players}
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          score={player.score}
          changeScore={handleScoreChange}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      )}

      <AddPlayerForm 
        addPlayer={handleAddPlayer}
      />
    </div>
  );

}

export default App;