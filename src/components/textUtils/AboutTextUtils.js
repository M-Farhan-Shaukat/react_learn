import React from "react";

function AboutTextUtils(props) {
  return (
    <div>
      <div className="container" style={{backgroundColor: props.mode==='light'?'white':'#0b2240', color : props.mode==='light'?'black':'white'}}>
        <h1>Aboun Us</h1>
        <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode==='light'?'white':'#0b2240', color : props.mode==='light'?'black':'white'}}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${props.mode==='dark' ? 'mode--dark':''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{backgroundColor: props.mode==='light'?'white':'#0b2240', color : props.mode==='light'?'black':'white'}}
              >
                Text Formatting Made Simple
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'#0b2240', color : props.mode==='light'?'black':'white'}}>
                Our <strong>Text Utility Web App</strong> offers a seamless way
                to format your text with ease. You can instantly convert text to{" "}
                <strong>UPPERCASE</strong> or
                <strong>lowercase</strong> with a single click. The app also
                helps you <strong>remove extra spaces</strong> from your text,
                ensuring a clean, well-structured format. These features are
                designed to make your text look professional and error-free.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed ${props.mode==='dark' ? 'mode--dark':''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{backgroundColor: props.mode==='light'?'white':'#0b2240', color : props.mode==='light'?'black':'white'}}
              >
                Efficient Text Management
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'#0b2240', color : props.mode==='light'?'black':'white'}}>
                With our intuitive tools, you can <strong>copy text</strong> to
                your clipboard with a single tap, saving you time and effort.
                The <strong>Clear Text</strong>
                feature allows you to quickly wipe the text field, giving you a
                fresh start whenever required. These options make it simple to
                manage your text without hassle, making your workflow faster and
                more efficient.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed ${props.mode==='dark' ? 'mode--dark':''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{backgroundColor: props.mode==='light'?'white':'#0b2240', color : props.mode==='light'?'black':'white'}}
              >
                Real-Time Insights and Preview
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'#0b2240', color : props.mode==='light'?'black':'white'}}>
                Stay in control with real-time word <strong>count, character count,</strong> and
                an interactive <strong>text preview</strong>. As you type or format your content,
                you can instantly see how many words and characters you've used,
                allowing for better precision and planning. This live preview
                ensures you always know how your text will look once it's
                finalized.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTextUtils;
