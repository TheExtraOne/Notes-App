import { useState } from "react";

import classes from "./comments.module.css";
import NewCommentForm from "./new-comment-form";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;