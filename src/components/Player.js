import React, {memo} from "react";
import Counter from "./Counter";

const Player = ({ name, score, changeScore, id, removePlayer }) => {

  
  /***************************************************************
  * RENDER
  ****************************************************************/
  return (
    <div className="player">
      {console.log(name + ' rendered')}
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        {name}
      </span>

      <Counter 
        score={score}
        id={id}
        changeScore={changeScore}
      />
    </div>
  );
}

/*****************************************************************
 * CUSTOM COMPARISON FUNCTION FOR REACT.MEMO
 *****************************************************************/
const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score;
}

/******************************************************************
 * EXPORT WITH REACT.MEMO
 *****************************************************************/
export default memo(Player, playerPropsAreEqual);