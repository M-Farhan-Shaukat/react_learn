import React, { useState } from "react";

function TextForm() {
  const [text, setText] = useState("");
  const hanldleTextChange = (e) => {
    console.log(e.target.value)
        setText(e.target.value)
  };
  const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
  };
  const handleloClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  };

  const handleClearClick = () => {
    let newText = ""
    setText(newText)
  };
  return (
    <>
      <div className="mb-3">
        <h1>Enter Text to anaylize below</h1>
        <textarea
          className="form-control"
          id="entertexthere"
          rows={8}
          value={text}
          onChange={hanldleTextChange}
        />

        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleloClick}
        >
          Convert to Lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleClearClick}
        >
         Clear All
        </button>
      </div>

      <div>
        <h2>
           Your Text Summary
        </h2>

        <p>{text.split(" ").length} words and total character are {text.length}</p>
        <p>{0.008  * text.split(" ").length} Minutes required to read</p>
        <h3>Preview Your Test </h3>
            <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
