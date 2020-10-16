import React, { useState } from "react";
import "./QuestionForm.css";

const addQuestion = () => {};

function QuestionForm() {
  const [questionData, setQuestionData] = useState({});

  return (
    <div className="Question-form">
      <label>
        {" "}
        Name:
        <input name="inputName" value={questionData.name} />
      </label>
      <label>
        {" "}
        Question:
        <input name="inputDescription" value={questionData.description} />
      </label>
      <label>
        {" "}
        Category:
        <input name="inputCategory" value={questionData.category} />
      </label>
      <button>Submit</button>
    </div>
  );
}

export default QuestionForm;
