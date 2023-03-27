import React from "react";

const UserContext = React.createContext({
  name: "",
  location: "",
  setName: () => {},
  setLocation: () => {},
});

export default UserContext;
