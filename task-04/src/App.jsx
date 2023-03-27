import React, { useState } from "react";
import "./App.css";
import UserContext from "./UserContext";
import Name from "./Name";
import Location from "./Location";
import UpdateUser from "./UpdateUser";

function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="App">
      <UserContext.Provider value={{ name, location, setName, setLocation }}>
        <Name />
        <Location />
        <UpdateUser />
      </UserContext.Provider>
    </div>
  );
}

export default App;
