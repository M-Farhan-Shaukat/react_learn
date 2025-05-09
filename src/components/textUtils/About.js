import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#21292C",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h3>About Our Character Counter Tool</h3>
      <p>
        Welcome to our Character Counter Tool, a practical platform designed to assist with text analysis and optimization. Whether you’re a writer, student, developer, or marketer, this tool is here to help you analyze and improve your content. With real-time character counting and additional helpful features, it is an ideal solution for tasks involving text analysis and content refinement.
      </p>
      <h3>Why Use Our Tool?</h3>
      <p>
        Our tool helps you easily count characters, words, lines, spaces, and paragraphs. It provides instant feedback on your text, making it ideal for people working with content that needs to meet specific requirements.
      </p>
      <h3>Key Features:</h3>
      <p>
        <strong>Comprehensive Text Analysis:</strong> Count characters, words, lines, spaces, and paragraphs quickly. This feature is useful for writers, students, and SEO professionals to ensure their content is structured properly.
      </p>
      <h3>Text Formatting & Cleaning</h3>
      <strong>Convert Text Case:</strong>
      <p>Change your text to upper case or lower case with a single click.</p>
      <strong>Remove Extra Spaces:</strong>
      <p>Eliminate unnecessary spaces to tidy up your text.</p>
      <strong>Remove Special Characters:</strong>
      <p>Get rid of unwanted characters to clean up your content.</p>
      <strong>Replace Words or Lines:</strong>
      <p>Find and replace specific words or lines to refine your text.</p>
      <h3>Easy Copy and Clear Functions</h3>
      <strong>Copy to Clipboard:</strong>
      <p>
        Easily copy your formatted or analyzed text to your clipboard for quick pasting elsewhere.
      </p>
      <strong>Clear All Text:</strong>
      <p>Clear all text with one click to start over with ease.</p>
      <h3>SEO Optimization</h3>
      <p>
        Our tool can help you optimize text for better search engine performance by tracking keyword density, word count, and readability.
      </p>
      <h3>How to Use:</h3>
      <p>
        Using the tool is simple: Just type or paste your text into the input area and watch as the character counter updates in real-time. The tool will break down your content into word count, sentence count, and more.
      </p>
      <h3>Why Return?</h3>
      <p>
        We are continuously improving our tool to enhance its functionality and make it even more user-friendly. Whether for school projects, marketing campaigns, or personal writing, our tool can help you work more efficiently.
      </p>
      <h3>Which Devices Does the Counter Work On?</h3>
      <p>
        Our tool works seamlessly across all devices—whether you're using a phone, tablet, or computer.
      </p>
    </div>
  );
}

export default About;
