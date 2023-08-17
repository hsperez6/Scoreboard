import React, {memo} from "react";
import Counter from "./Counter";


const Player = (props) => {
  return (
    <div className="player">
      {console.log(props.name + ' rendered')}
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        {props.name}
      </span>

      <Counter 
        score={props.score}
        id={props.id}
        changeScore={props.changeScore}
      />
    </div>
  );
}

export default memo(Player);