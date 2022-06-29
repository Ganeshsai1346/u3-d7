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

  /* componentDidMount = () => {
    if (this.props.asin) this.fetchComments();
  }; */

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* componentDidUpdate = (prevProps, prevState) => {
    if (this.props.asin && prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }; */

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTU5ODQ3NTAsImV4cCI6MTY1NzE5NDM1MH0.eq4eTFEZTokG0XppZERDfyrOXMSWXsviQ2Is8_YCqN4",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        /* this.setState({
          comments: data,
        }); */
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
