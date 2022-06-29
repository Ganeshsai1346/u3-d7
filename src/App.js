import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList';
import CommentArea from './components/CommentArea'
import { Container, Row, Col } from 'react-bootstrap';
import scifiBooks from './data/scifi.json'
import { useState } from 'react';

const App = () => {

  /* state = {
    asin: ""
  }; */

  const [asin, setAsin] = useState(null)


  /* showComments = (newAsin) => {
    this.setState(
      { asin: newAsin }
    )
  } */


  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={8}><BookList books={scifiBooks} showComments={setAsin} /></Col>
          <Col md={4}><CommentArea asin={asin} /></Col>
        </Row>
      </Container>
    </div>
  );
}



export default App;
