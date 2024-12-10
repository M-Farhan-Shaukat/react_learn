import React from "react";

function Alert(props) {
    const capitalize=(word)=>{
        let newText = word.toLowerCase()
        return newText.charAt(0).toUpperCase()+newText.slice(1)
    }
  return (
    props.alert && (
      <div class={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)} :</strong> {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
