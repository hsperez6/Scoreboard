import React from "react";

const Stats = ({ players }) => {
 
 /***************************************************************
 * VARIABLES
 ****************************************************************/
  const totalPlayers = players.length;

  var totalScore = players.reduce((total, player) => {
    return total + player.score;
  }, 0)
  
 /***************************************************************
 * RENDER
 ****************************************************************/
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Stats;