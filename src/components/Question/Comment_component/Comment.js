import React from "react";
//import "./Comment.css";

export default function Comment({ name, body }) {
  return (
    <div className="comment">
      <div>
        <p>
          <b>{name}</b>
        </p>
        <p>{body}</p>
      </div>
    </div>
  );
}
