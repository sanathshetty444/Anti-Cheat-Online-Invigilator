import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    // {
    //   text: "Javascript",
    //   handler: props.actionProvider.handleJavascriptList,
    //   id: 1,
    // },
    { text: "Test Time",handler: props.actionProvider.handleTestTime, id: 2 },
    { text: "Test Subject", handler:props.actionProvider.handleTestSubject, id: 3 },
    { text: "Test topics", handler:props.actionProvider.handleTestTopics, id: 4 },
    { text: "Time table", handler:props.actionProvider.handleTimeTable, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
