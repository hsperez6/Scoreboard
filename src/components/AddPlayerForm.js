import React from "react";

const AddPlayerForm = () => {
  return (
    <form>
      <input 
        type="text"
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