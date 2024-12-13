import React from "react";

function AboutTextUtils(props) {
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#0b2240",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Aboun Us</h1>
        <div
          className="accordion"
          id="accordionExample"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#0b2240",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <p>
            Text utilities are essential tools designed to help users manage and
            manipulate text efficiently. These utilities provide a wide range of
            functionalities such as converting text to uppercase or lowercase,
            removing extra spaces, copying text to the clipboard, clearing text,
            and even removing special characters. Additionally, they can be used
            to replace specific words or phrases and count various aspects of
            text like the number of words, characters, lines, and paragraphs.
            With the ability to preview these changes in real-time, text
            utilities streamline workflows, save time, and enhance productivity,
            especially in tasks like content creation, editing, and data
            processing. These tools are widely used by writers, editors,
            developers, and anyone who needs to work with large amounts of text
            in an efficient and organized manner.
          </p>
          <h3>Key features of this web is as follow :</h3>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed ${
                  props.mode === "dark" ? "mode--dark" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#0b2240",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                Text Conversion & Formatting
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#0b2240",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                Our <strong>Text Manipulation Web Tool</strong> allows you to
                convert text to <strong>uppercase</strong> or{" "}
                <strong>lowercase</strong> with just a single click, ensuring
                uniformity across your content. You can also{" "}
                <strong>remove extra spaces</strong> from messy text to create
                clean, well-structured paragraphs. If you want a fresh start,
                simply use the <strong>clear text</strong> option to delete all
                content instantly. These features make text formatting quick,
                easy, and efficient for <strong>writers</strong>,{" "}
                <strong>students</strong>, and <strong>developers</strong>{" "}
                alike.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed ${
                  props.mode === "dark" ? "mode--dark" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#0b2240",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                Text Cleaning & Editing
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#0b2240",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                This tool provides advanced text-cleaning options like{" "}
                <strong>removing special characters</strong> to keep your
                content plain and simple. It also allows you to{" "}
                <strong>replace specific words</strong> throughout the text,
                saving time when making global edits. With these features, you
                can ensure your content is <strong>clean</strong>,{" "}
                <strong>consistent</strong>, and ready for professional use.
                Whether you’re editing <strong>large documents</strong> or{" "}
                <strong>small snippets</strong>, these functionalities boost{" "}
                <strong>productivity</strong>.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed ${
                  props.mode === "dark" ? "mode--dark" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#0b2240",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                Word & Character Analysis
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#0b2240",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                Track the structure and length of your content with real-time
                statistics on <strong>word count</strong>,{" "}
                <strong>character count</strong>, <strong>line count</strong>,
                and <strong>paragraph count</strong>. This analysis helps you
                stay within <strong>content limits</strong>, meet{" "}
                <strong>SEO requirements</strong>, or ensure{" "}
                <strong>readability</strong>. Additionally, you can{" "}
                <strong>preview the edited text</strong> before copying it,
                ensuring everything looks perfect. The one-click{" "}
                <strong>copy option</strong> allows you to transfer the final
                version of your text effortlessly. This all-in-one tool is ideal
                for <strong>content creators</strong>, <strong>students</strong>
                , and <strong>editors</strong> looking to maintain{" "}
                <strong>clean</strong>, <strong>optimized</strong>, and{" "}
                <strong>structured text</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTextUtils;
