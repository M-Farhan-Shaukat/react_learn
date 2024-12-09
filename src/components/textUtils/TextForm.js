import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const hanldleTextChange = (e) => {
    console.log(e.target.value)
        setText(e.target.value)
  };
  const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Convented to UpperCase","success")
  }
  const handleloClick =() =>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Convented to LowerCase','success')

  };

  const handleClearClick = () => {
    let newText = ""
    setText(newText)
    props.showAlert('Text Cleared','success')
  };

  const handleCopyClick=()=>{
    let text = document.getElementById('entertexthere');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Coppied to Clipboard!','success')
  }
  const handleRemoveExtraSpaceClick=()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert('Extra Spaces Removed','success')
  }
  
  return (
    <>
      <div className=" container mb-3" style={{backgroundColor: props.mode==='light'?'white':'#0b2240', color : props.mode==='light'?'black':'white'}}>
        <h1 className="">Enter Text to anaylize below</h1>
        <textarea
          className="form-control"
          id="entertexthere"
          rows={8}
          value={text}
          onChange={hanldleTextChange}
          style={{backgroundColor: props.mode==='light'?'white':'grey', color : props.mode==='light'?'black':'white'}}
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
          onClick={handleCopyClick}
        >
         Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleRemoveExtraSpaceClick}
        >
         Remove Extra Spaces
        </button>

        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleClearClick}
        >
         Clear Text
        </button>
      </div>

      <div className="container" style={{backgroundColor: props.mode==='light'?'white':'#0b2240', color : props.mode==='light'?'black':'white'}}>
        <h2 className="" >
           Your Text Summary
        </h2>

        <p className="" >{text.split(" ").length} words and total character are {text.length}</p>
        <p className="" >{0.008  * text.split(" ").length} Minutes required to read</p>
        <h3 className="" >Preview Your Test </h3>
            <p className="" >{text.length > 0 ? text : "Enter Something in textbox to Preview"}</p>
      </div>
    </>
  );
}

export default TextForm;
