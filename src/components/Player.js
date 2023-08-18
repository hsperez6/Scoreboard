import React, {memo} from "react";
import PropTypes from "prop-types"

import Icon from "./Icon";
import Counter from "./Counter";

const Player = ({ name, score, changeScore, id, removePlayer, isHighScore }) => {

  /***************************************************************
  * RENDER
  ****************************************************************/
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        <Icon isHighScore={isHighScore}/>
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
  return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
}

/*****************************************************************
 * PROPTYPES CHECKER
****************************************************************/
Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  changeScore: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  removePlayer: PropTypes.func.isRequired,
  isHighScore: PropTypes.bool.isRequired
};

/******************************************************************
 * EXPORT WITH REACT.MEMO
 *****************************************************************/
export default memo(Player, playerPropsAreEqual);