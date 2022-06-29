/** @format */

import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books, showComments }) => {
  return (
    <Container>
      <h1>All Books</h1>
      <Row>
        {books &&
          books.slice(0, 12).map((book) => (
            <Col sm={6} md={3} className="mb-3" key={book.asin}>
              <SingleBook book={book} showComments={showComments} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
