import React, { useContext } from "react";
import UserContext from "./UserContext";

function Location() {
  const { location } = useContext(UserContext);

  return <h2>{location}</h2>;
}

export default Location;
