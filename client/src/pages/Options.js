import React, { useContext } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

// import context for global state
import UserInfoContext from '../utils/UserInfoContext';

import * as API from '../utils/API';
import AuthService from '../utils/auth';

function AddToCart() {
    const handleAddButton = () =>{
        console.log("add to cart button clicked")

    }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Options</h1>
        </Container>
      </Jumbotron>
      <Container>
 
        <h2>
            Wine-ing is always permitted here.
        </h2>
        <h3>
            Supporting small-name wineries with big-time quality! Our fine wine selection includes vegan and bioavailable varietials. 
        </h3>

        <h5>
          product 1
        </h5>
        <Button className='btn-block btn-danger' onClick={() => handleAddButton()}>
                    add to cart
                  </Button>
        {/* <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {/* <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button> */}
                {/* </Card.Body>
              </Card>
            );
          })}
        </CardColumns> */}
      </Container>
    </>
  );
}

export default AddToCart;