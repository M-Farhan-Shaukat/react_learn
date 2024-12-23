import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#0b2240",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h3>About Our Online Character Counter Tool</h3>
      <p>
        Welcome to our Online Character Counter Tool, a powerful and intuitive
        platform built to make text analysis and optimization quick, easy, and
        efficient. Whether you're a writer, student, developer, or digital
        marketer, our tool is designed to help you achieve precise text analysis
        and improve your content. With real-time counting and a variety of handy
        features, our platform supports various content-related tasks, helping
        you work smarter, not harder. Why Visit and Return to Our Tool?
      </p>
      <h3> Save Time and Effort:</h3>
      <p>
        Our tool helps you quickly count characters, words, lines, spaces, and
        paragraphs, providing an instant breakdown of your text. This real-time
        feedback ensures you're always in control of your content, making it
        ideal for anyone working with large amounts of text. Make Your Content
      </p>
      <strong>SEO-Ready:</strong>
      <p>
        Whether you're optimizing for SEO or refining your blog post, the tool
        provides valuable insights into your content’s structure, helping you
        ensure it meets search engine requirements. Perfect for
      </p>
      <strong> Multiple Uses: </strong>
      <p>
        From students writing essays to developers working with code, our
        platform can handle it all. It’s an all-in-one solution to count,
        format, clean, and enhance your text on the fly. User-Centric
      </p>
      <strong>Experience: </strong>
      <p>
        Designed with simplicity in mind, our tool is easy to use on any
        device—desktop, tablet, or smartphone—ensuring you can access it
        anytime, anywhere.
      </p>
      <h3>Key Features:</h3>
      <p>
        {" "}
        Comprehensive Text Analysis Count characters, words, lines, spaces, and
        paragraphs instantly. This is perfect for writers, students, and SEO
        professionals needing to meet word or character limits, or simply
        organizing their text.
      </p>
      <h3>Effortless Text Formatting & Cleaning</h3>
      <strong> Convert Text Case:</strong>
      <p>Change your text to upper case or lower case with one click.</p>
      <strong> Remove Extra Spaces: </strong>
      <p>Clean up messy text by eliminating unnecessary spaces.</p>
      <strong>Remove Special Characters:</strong>
      <p>Easily get rid of unwanted characters to clean up your content.</p>
      <strong>Replace Words or Lines:</strong>
      <p>
        Quickly find and replace specific words or lines to refine your text.
      </p>
      <h3>Easy Copy and Clear Functions</h3> <strong>Copy to Clipboard:</strong>{" "}
      <p>
        Instantly copy your formatted or analyzed text to your clipboard for
        easy pasting elsewhere.
      </p>
      <strong>Clear All Text:</strong>
      <p>Start fresh in a single click—clear all the text with no hassle.</p>
      <h3>SEO Optimization</h3>
      <p>
        {" "}
        Optimize your text for better search engine performance by tracking and
        analyzing keyword density, word count, and readability. Perfect for
        digital marketers and content creators.
      </p>
      <h3>How to Use:</h3>
      <p>
        Using the tool is incredibly simple: Just type or paste your text into
        the input area, and watch as the character counter updates in real-time.
        You’ll see detailed breakdowns of word count, sentence count, paragraph
        count, and more. Plus, with the custom options available, you can adjust
        settings to tailor the tool to your needs, including keyword density
        analysis. Access Anytime, Anywhere Our tool is fully mobile-responsive,
        meaning it works seamlessly across devices, whether you're on your
        phone, tablet, or computer. No matter where you are, you can rely on us
        to help you keep your content in check.
      </p>
      <h3>Why Return?</h3>
      <p>
        We’re constantly improving our tool to bring you more features, better
        performance, and the most user-friendly experience. Whether you're using
        it for a school project, a marketing campaign, or a personal writing
        project, there’s always a reason to come back—get more done, faster!
      </p>
      <h3>Which Devices Does the Counter Work On?</h3>
      <p>
        Character Count Online works on absolutely any device. Whether you have
        a mobile phone, computer, console, or tablet, the counter will work
        perfectly!
      </p>
      {/* <h3>About Our Online Character Counter Tool</h3>
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
      </p> */}
    </div>
  );
}

export default About;
