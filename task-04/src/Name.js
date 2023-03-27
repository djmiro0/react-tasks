import React, { useContext } from "react";
import UserContext from "./UserContext";

function Name() {
  const { name } = useContext(UserContext);

  return <h1>{name}</h1>;
}

export default Name;
