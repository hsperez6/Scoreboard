import React, { useRef } from "react";

const AddPlayerForm = ({ addPlayer }) => {
  
  /***************************************************************
  * STATE
  ****************************************************************/
  const playerInput = useRef();

  /*****************************************************************
  * CALLBACK FUNCTION
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

export default AddPlayerForm;