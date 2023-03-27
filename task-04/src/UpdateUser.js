import React, { useContext } from "react";
import UserContext from "./UserContext";

function UpdateUser() {
  const { name, location, setName, setLocation } = useContext(UserContext);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="text" value={location} onChange={handleLocationChange} />
    </div>
  );
}

export default UpdateUser;
