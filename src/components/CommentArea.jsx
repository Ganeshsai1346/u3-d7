/** @format */

import CommentList from "./CommentList";
import { ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  /* state = {
    comments: [],
  }; */

  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /* componentDidMount = () => {
    if (this.props.asin) this.fetchComments();
  }; */

  useEffect(() => {
    fetchComments();
    console.log("Component Did Mount");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* componentDidUpdate = (prevProps, prevState) => {
    if (this.props.asin && prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }; */

  useEffect(() => {
    fetchComments();
    console.log("Component Did Update");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNjMTZmYjRjYzU2YzAwMTU2ZjE5NmMiLCJpYXQiOjE2NjQ4ODI0MjcsImV4cCI6MTY2NjA5MjAyN30.2RDte3wVXvN0Cr-WCkw2llKFBIfW0ToegCCaQ9pNqyI",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setComments(data);
      } else {
        alert("Something happened!");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <>
      <h1>Book comments</h1>
      {comments && (
        <ListGroup>
          <CommentList allComments={comments} />
          <AddComment asin={asin} />
        </ListGroup>
      )}
    </>
  );
};

export default CommentArea;
