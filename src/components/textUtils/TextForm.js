import React, { useState } from "react";
import AboutTextUtils from "./AboutTextUtils";
import About from "./About";

function WordDensity({ text }) {
  const calculateWordDensity = (text) => {
    // Normalize the text to lowercase and split it into words
    const normalizedText = text.toLowerCase().trim();

    // Split by spaces and filter out any empty strings (including from spaces)
    const words = normalizedText.split(/\s+/).filter(Boolean); // Remove empty words

    if (words.length === 0) return {}; // No words, return an empty object

    // Create an object to store the frequency of each word
    const wordCount = {};

    // Count the occurrences of each word
    words.forEach((word) => {
      if (wordCount[word]) {
        wordCount[word] += 1;
      } else {
        wordCount[word] = 1;
      }
    });

    // Calculate the word density for each word and store in a new object
    const wordDensity = {};
    const totalWords = words.length;

    for (const word in wordCount) {
      wordDensity[word] = {
        count: wordCount[word],
        percentage: ((wordCount[word] / totalWords) * 100).toFixed(2),
      };
    }

    return wordDensity;
  };

  const wordDensities = calculateWordDensity(text);

  return (
    <div>
      {Object.keys(wordDensities).length > 0 && (
        <div>
          <h3>Word Density</h3>
          <ul>
            {Object.entries(wordDensities).map(
              ([word, { count, percentage }]) => (
                <li key={word}>
                  {word}: <strong>{count} times </strong>({percentage}%)
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

function TextForm(props) {
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const hanldleTextChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convented to LowerCase", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handleCopyClick = () => {
    let text = document.getElementById("entertexthere");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleRemoveExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const handleRemoveSpecialCharacterClick = () => {
    let newText = text.replace(/[^\w\s',./]/g, "");
    setText(newText);
    props.showAlert("Special Characters Removed", "success");
  };

  const handleReplaceText = () => {
    if (findText.trim() === "") {
      alert("Please enter text to find.");
      return;
    }
    const regex = new RegExp(findText, "g");
    const updatedText = text.replace(regex, replaceText);
    setText(updatedText);
    setFindText("");
    setReplaceText("");

    props.showAlert("Replaced successfully", "success");
  };

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word !== "").length;
  return (
    <>
      <div
        className=" container mb-3"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#21292C",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Count Characters, Words, Sentences & More</h2>

        <h3 className="">Enter text below to analyze.</h3>
        <textarea
          className="form-control"
          id="entertexthere"
          rows={8}
          value={text}
          onChange={hanldleTextChange}
          placeholder="Enter Text to Utilize"
          // style={{backgroundColor: props.mode==='light'?'white':'#21292C', color : props.mode==='light'?'black':'white'}}
        />
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleCopyClick}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={handleClearClick}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
          disabled={text.length === 0}
        >
          Clear Text
        </button>

        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          disabled={text.length === 0}
        >
          Replace Words
        </button>

        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleloClick}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleRemoveExtraSpaceClick}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleRemoveSpecialCharacterClick}
          disabled={text.length === 0}
        >
          Remove Special Characters
        </button>
      </div>

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2261802900205848"
        crossorigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-2261802900205848"
        data-ad-slot={7004812533}
      />

      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <div className="main-wrapper">
        <div
          className="container"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#21292C",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h1 className="">Your Text Summary</h1>
          <div className="statistics">
            <div className="stat">
              <span>CHARACTERS</span>
              <span> {text.length}</span>
            </div>
            <div className="stat">
              <span>WORDS</span>
              <span> {text.length > 0 ? wordCount : 0}</span>
            </div>

            <div className="stat">
              <span>SENTENCES</span>
              <span>
                {" "}
                {text.split("\n").filter((line) => line.trim() !== "").length}
              </span>
            </div>
            <div className="stat">
              <span>PARAGRAPHS</span>
              <span>
                {" "}
                {
                  text
                    .split(/\n\s*\n/)
                    .filter((paragraph) => paragraph.trim() !== "").length
                }
              </span>
            </div>
            <div className="stat">
              <span>SPACES</span>
              <span>{text.split(" ").length - 1}</span>
            </div>
          </div>

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2261802900205848"
            crossorigin="anonymous"
          ></script>

          <ins
            class="adsbygoogle"
            style={{ display: "inline-block", width: "728px", height: "90px" }}
            data-ad-client="ca-pub-2261802900205848"
            data-ad-slot="4838943492"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          <h1 className="">Preview Your Text </h1>
          <p className="">
            {text.length > 0 ? text : "Enter Something to Preview"}
          </p>
        </div>
        <div
          className="container mt-3"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#21292C",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <WordDensity text={text} />
        </div>

        <div className="about-container">
          <About mode={props.mode} />
        </div>

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2261802900205848"
          crossorigin="anonymous"
        ></script>
        <ins
          class="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-ef+6k-30-ac+ty"
          data-ad-client="ca-pub-2261802900205848"
          data-ad-slot="7747080382"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Fill fields to replace your words
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="col-md-12">
                  <label>Find Text:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="inputName"
                    onChange={(e) => setFindText(e.target.value)}
                    value={findText}
                    placeholder="Enter text to find"
                  />
                </div>
                <div className="col-md-12">
                  <label>Replace With:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="inputName"
                    onChange={(e) => setReplaceText(e.target.value)}
                    value={replaceText}
                    placeholder="Enter text to find"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleReplaceText}
                  data-bs-dismiss="modal"
                >
                  Find and Replace
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex={-1}
          aria-labelledby="exampleModal1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Confirm Clear
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                Are you sure you want to Clear this Text?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClearClick}
                  data-bs-dismiss="modal"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextForm;
