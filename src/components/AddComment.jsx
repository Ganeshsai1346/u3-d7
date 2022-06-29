/** @format */
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin }) => {
  const [addComment, setAddComment] = useState({
    comment: "",
    rate: 1,
  });

  // useEffect(() => {
  //   setAddComment(() => ({
  //     ...addComment,
  //     elementId: asin,
  //   }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [asin]);

  const postComments = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({ ...addComment, elementId: asin }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTU5ODQ3NTAsImV4cCI6MTY1NzE5NDM1MH0.eq4eTFEZTokG0XppZERDfyrOXMSWXsviQ2Is8_YCqN4",
          },
        }
      );
      if (response.ok) {
        alert("Comment Added!");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div>
      <h2>Add Comment Here!</h2>
      <Form onSubmit={postComments}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={addComment.comment}
            onChange={(e) =>
              setAddComment({ ...addComment, comment: e.target.value })
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default AddComment;
