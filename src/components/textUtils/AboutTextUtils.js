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
        <h1>About Our Online Character Counter Tool</h1>
        <div
          className="accordion"
          id="accordionExample"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#0b2240",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <p>
            Our <strong>Online Character Counter Tool</strong> is a versatile and user-friendly platform designed to help users analyze and optimize their text. With this tool, you can easily count characters, words, sentences, paragraphs, and more. It allows you to format, clean, and refine your content, making it perfect for writers, students, developers, and anyone working with large amounts of text. This web-based tool ensures accurate, efficient, and real-time text analysis to support a variety of content-related tasks.
          </p>
          <h3>Key Features of Our Online Character Counter Tool:</h3>

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
                Our tool allows you to count <strong>characters</strong>, <strong>words</strong>, <strong>sentences</strong>, and <strong>paragraphs</strong> in real-time. This makes it an essential resource for students, writers, and SEO specialists who need to meet specific content limits or improve the readability of their work.
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
                Our <strong>Text Cleaning</strong> feature helps you eliminate extra spaces, remove special characters, and clean up messy text with a single click. You can also clear all text instantly to start fresh. This makes it easy to maintain well-structured, professional-looking content.
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
                SEO-Optimized Content Analysis
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
                Our tool helps you optimize your content for <strong>SEO</strong> by providing valuable insights into word count, character count, and readability. This is ideal for content creators, digital marketers, and web developers who want to ensure their text meets SEO guidelines and attracts search engines.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutTextUtils;
