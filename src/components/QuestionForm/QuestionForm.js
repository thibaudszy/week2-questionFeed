import React, { useState } from "react";
import "./QuestionForm.css";

function QuestionForm({ addQuestion }) {
  const [questionData, setQuestionData] = useState({});

  console.log("QUESTION DATA STATE:", questionData);

  const { name, description, category } = questionData;

  return (
    <div className="Question-form">
      <h2 className="Question-form-header">Submit your question.</h2>
      <label>
        {" "}
        Name:
        <input
          className="Question-form-input"
          onChange={(e) => {
            setQuestionData({ ...questionData, name: e.target.value });
          }}
          value={questionData.name}
        />
      </label>
      <label>
        {" "}
        Question:
        <input
          className="Question-form-input"
          onChange={(e) => {
            setQuestionData({ ...questionData, description: e.target.value });
          }}
          value={questionData.description}
        />
      </label>
      <label>
        {" "}
        Category:
        <input
          className="Question-form-input"
          onChange={(e) => {
            setQuestionData({ ...questionData, category: e.target.value });
          }}
          value={questionData.category}
        />
      </label>
      <button
        className="Question-form-button"
        onClick={() => addQuestion(name, description, category)}
      >
        Submit
      </button>
    </div>
  );
}

export default QuestionForm;
