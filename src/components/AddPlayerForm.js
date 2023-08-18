import React, { useRef } from "react";
import PropTypes from "prop-types"

const AddPlayerForm = ({ addPlayer }) => {
  
  /***************************************************************
  * REF
  ****************************************************************/
  const playerInput = useRef();

  /*****************************************************************
  * FUNCTION
  ****************************************************************/
  const handleSubmit = (event) => {
    event.preventDefault();
    addPlayer(playerInput.current.value);
    event.currentTarget.reset();
  }
  
  /***************************************************************
  * RENDER
  ****************************************************************/
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input 
        type="text"
        ref={playerInput}
        placeholder="Enter player's name"
      />
      <input
        type="submit"
        value="Add Player"
      />
    </form>
  );
}

/*****************************************************************
 * PROPTYPES CHECKER
****************************************************************/
AddPlayerForm.propTypes = {
  addPlayer: PropTypes.func.isRequired
};

export default AddPlayerForm;