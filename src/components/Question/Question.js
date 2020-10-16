import React, { useState } from "react";
import Comment from "./Comment_component/Comment";
import "./Question.scss";

const Question = ({
  id,
  name,
  description,
  category,
  upVotes,
  resolved,
  incrementUpVotes,
  resolve,
}) => {
  const [comments, set_comments] = useState([]);
  const [newComment, set_new_comment] = useState({});

  const { commentName, body } = newComment;
  const onClickIncrement = () => {
    incrementUpVotes(id);
  };
  const onClickResolve = () => {
    resolve(id);
  };

  const postComment = () => {
    set_comments([...comments, newComment]);
  };

  return (
    <div>
      {/* <NameTag />
        <Body />
        <upVotes />
        
        comments.map((comment ) => <Comment/>) */}
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{description}</p>
      <p>
        <b>up votes: </b>
        {upVotes}
      </p>
      {comments.map(({ name, body }) => {
        return <Comment name={name} body={body} />;
      })}
      <button onClick={onClickIncrement}> +1 </button>
      <button onClick={onClickResolve}> resolved </button>
      <p></p>
      <input
        className="Comment-name-input"
        onChange={(e) => {
          return set_new_comment({ ...newComment, name: e.target.value });
        }}
        //value={comment.body}
        placeholder="your name"
      />
      <input
        className="Comment-body-input"
        onChange={(e) => {
          return set_new_comment({ ...newComment, body: e.target.value });
        }}
        //value={comment.body}
        placeholder="insert comment here"
      />
      <button onClick={postComment}> Post </button>
    </div>
  );
};

export default Question;
