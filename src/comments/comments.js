import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import classes from "./comments.module.css";
import NewCommentForm from "./new-comment-form";
import useHttp from "../hooks/use-http";
import { getAllComments } from "../lib/api";
import Loading from "../UI/loading";
import CommentsList from "./comments-list";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams();

  const { qouteID } = params;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(qouteID);
  }, [qouteID, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(qouteID);
  }, [sendRequest, qouteID]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <Loading />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments were added yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={qouteID}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
