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
        <h1>About Our Text Analysis Tool</h1>
        <div
          className="accordion"
          id="accordionExample"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#0b2240",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <p>
            Our <strong>Text Analysis Tool</strong> is designed for anyone who
            works with text. Whether you're a student, writer, or business
            professional, this tool offers an easy way to analyze your text by
            counting characters, words, sentences, and paragraphs. It also helps
            clean and format your text to ensure it's professional and ready for
            any use. It’s quick, easy, and accurate—ideal for improving the
            quality of your writing, SEO content, and more.
          </p>
          <h3>Key Features of Our Text Analysis Tool:</h3>

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
                Count Characters, Words & Sentences
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
                Our tool lets you quickly count <strong>characters</strong>,{" "}
                <strong>words</strong>, <strong>sentences</strong>, and{" "}
                <strong>paragraphs</strong>. This feature is useful for managing
                content length, checking for SEO compliance, or simply ensuring
                that your writing is within specific constraints.
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
                Text Cleaning & Formatting
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
                The <strong>Text Cleaning</strong> feature helps you remove
                unnecessary spaces, special characters, and any unwanted
                formatting with a click of a button. You can also clear all
                content instantly, allowing you to start fresh every time you
                use the tool. This ensures that your content is well-organized
                and easy to work with.
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
                SEO Content Optimization
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
                Our tool provides insights into optimizing your text for{" "}
                <strong>SEO</strong> by evaluating your word and character
                count. This feature is great for digital marketers, bloggers,
                and content creators who want to ensure their content is
                search-engine friendly and adheres to SEO best practices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTextUtils;
