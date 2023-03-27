import React from "react";
import "./style.css";

function App() {
  const user = {
    name: "Jeff Bezos",
    city: "Albuquerque",
    born: 1964,
    likes: "Being rich",
    twitterLink: "https://twitter.com/jeffbezos",
    img: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1032942302_dkawzr.jpg",
    twitterName: "JeffBezos",
    companies: [
      "Amazon",
      "The Washington Post",
      "Google share holder",
      "IMBD",
      "Alexa",
      "Blue Origin",
      "Twitch",
      "Zappos",
      "Whole food market",
      "Amazon robotics",
      "Goodreads",
    ],
  };
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h2>{user.city}</h2>
      <h3>{user.born}</h3>
      <h4>{user.likes}</h4>
      <a href="https://twitter.com/jeffbezos">twitterLink</a>
      <img src={user.img} alt="jeff" />
      <h5>{user.twitterName}</h5>
      <ul>
        {user.companies.map((company) => (
          <li>{company}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
