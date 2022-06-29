/** @format */

import SingleComment from "./SingleComment";

const CommentList = ({ allComments }) => {
  return (
    allComments &&
    allComments.map((comment) => (
      <li key={comment._id}>
        <SingleComment bookComment={comment} />
      </li>
    ))
  );
};

export default CommentList;
