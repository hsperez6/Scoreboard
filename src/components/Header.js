import React from "react";
import PropTypes from "prop-types"

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = ({ title, players }) => {
  
  /*****************************************************************
   * RENDER
   ****************************************************************/
  return (
    <header>
      <Stats 
        players={players}
      />

      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
}


/**
 * 
        title="Scoreboard"
        players={players}
 */

  /*****************************************************************
   * PROPTYPES CHECKER
   ****************************************************************/
  Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.array
  };

export default Header;