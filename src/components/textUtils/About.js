import React from "react";

function About(props) {
  return (
    <div style={{
        backgroundColor: props.mode === "light" ? "white" : "#0b2240",
        color: props.mode === "light" ? "black" : "white",
      }}>

      <h3>About Our Online Character Counter Tool</h3>
      <p>
        Our <strong>Online Character Counter Tool</strong> is a versatile and
        user-friendly platform designed to help users analyze and optimize their
        text. With this tool, you can easily count characters, words, sentences,
        paragraphs, and more. It allows you to format, clean, and refine your
        content, making it perfect for writers, students, developers, and anyone
        working with large amounts of text. This web-based tool ensures
        accurate, efficient, and real-time text analysis to support a variety of
        content-related tasks.
      </p>
      <h3>Key Features :</h3>
      <h3>Count Characters, Words & Sentences</h3>
      <p>
        Our tool allows you to count <strong>characters</strong>,{" "}
        <strong>words</strong>, <strong>sentences</strong>, and{" "}
        <strong>paragraphs</strong> in real-time. This makes it an essential
        resource for students, writers, and SEO specialists who need to meet
        specific content limits or improve the readability of their work.
      </p>
      <h3>Text Cleaning & Formatting</h3>
      <p>
        {" "}
        Our <strong>Text Cleaning</strong> feature helps you eliminate extra
        spaces, remove special characters, and clean up messy text with a single
        click. You can also clear all text instantly to start fresh. This makes
        it easy to maintain well-structured, professional-looking content.
      </p>
      <h3>SEO-Optimized Content Analysis</h3>
      <p>
        Our tool helps you optimize your content for <strong>SEO</strong> by
        providing valuable insights into word count, character count, and
        readability. This is ideal for content creators, digital marketers, and
        web developers who want to ensure their text meets SEO guidelines and
        attracts search engines.
      </p>

      <h2>How it is used?</h2>
      <p>
        You can either type your text directly into the input area or copy and
        paste it. As you do so, the character counter will instantly update,
        showing the total number of characters, words, sentences, paragraphs,
        and whitespace in your text. Additionally, the tool calculates keyword
        density, which can be customized through the options menu.
      </p>

      <h2>Which devices does the counter work on?</h2>
      <p>
        Character Count Online works on absolutely any device. No matter if you
        have a mobile phone, computer, console or tablet the counter will work
        perfectly!
      </p>
    </div>
  );
}

export default About;
