/** @format */

import { Card } from "react-bootstrap";

const SingleBook = ({ book, showComments }) => {
  return (
    <Card
      id="card"
      onClick={() => {
        showComments(book.asin);
      }}>
      <Card.Img className="card-img" variant="top" src={book.img} />
      <Card.Body>
        <Card.Text className="card-title text-light text-center mt-2">
          {book.title}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
