import React, { useState } from "react";
import Question from "../Question/Question";
import QuestionForm from "../QuestionForm/QuestionForm";
import "./Feed.scss";

export default function Feed() {
  // =============================================================================
  // state declaration
  // =============================================================================

  const [questions, set_questions] = useState([
    {
      id: 1,
      name: "Thibaud",
      description: "I wrecked myself. error 404",
      category: "My code doesn't work",
      upVotes: 3,
      resolved: false,
    },
    {
      id: 2,
      name: "Roibin",
      description: "variable not found",
      category: "My code doesn't work",
      upVotes: 2,
      resolved: false,
    },
    {
      id: 3,
      name: "Tim",
      description: "I don't undestand useEffet",
      category: "Need explaining",
      upVotes: 10,
      resolved: false,
    },
  ]);
  // =============================================================================
  // functions
  // =============================================================================

  // ---------------------------------------------------------------------------
  const addQuestion = (name, description, category) => {
    console.log("Adding data: name, description, category");
    const newQuestion = {
      id: questions.length + 1,
      name: name,
      description: description,
      category: category,
      upVotes: 0,
      resolved: false,
    };

    const questionObject = [...questions, newQuestion];

    set_questions(questionObject);
  };
  // ---------------------------------------------------------------------------
  const modifyUpVotes = (id, newupVotes) => {
    const newQuestions = [...questions].map((question) =>
      question.id === id ? { ...question, upVotes: newupVotes } : question
    );
    set_questions(newQuestions);
  };
  // ---------------------------------------------------------------------------
  const incrementUpVotes = (id) => {
    // let newUpVotes = 0;
    // questions.forEach((question) => {
    //   if (question.id === id) {
    //     console.log("upVotes", question.upVotes);
    //     newUpVotes = question.upVotes + 1;
    //   }
    // });
    const questionToUpVote = questions.find((question) => question.id === id);

    modifyUpVotes(id, questionToUpVote.upvotes + 1);
  };
  // ---------------------------------------------------------------------------
  const resolve = (id) => {
    modifyUpVotes(id, 0);
  };
  //---------------------------------------------------------------------------
  function compare_upVotes(a, b) {
    return b.upVotes - a.upVotes;
  }

  const sortedQuestions = questions.sort(compare_upVotes);

  // =======================================================================
  // returning the component
  // =======================================================================
  return (
    <div className="Feed-flex-container">
      <div className="Feed">
        {sortedQuestions.map((question) => (
          <Question
            key={question.id}
            incrementUpVotes={incrementUpVotes}
            resolve={resolve}
            {...question}
          />
        ))}
      </div>
      <QuestionForm addQuestion={addQuestion} />
    </div>
  );
}
