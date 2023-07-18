import React from "react";
import "./App.css";

function App() {
  const displayEmojiName = event => alert(event.target.id)
  const emojis =[
    {
      'emoji' : "😀",
      'name' :  "Grinning Face"
    },
    {
      'emoji' : "🎉",
      'name' : "Party Popper"
    },
    {
      'emoji' : "💃",
      'name' : "Dancing Lady"
    }
  ];
  const displayAction = false;
  return (
    <div className="container">
      <h1>Hello World !</h1>
     {displayAction && <p>I Am writing Paragraph</p>} 
      <ul>
      {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
