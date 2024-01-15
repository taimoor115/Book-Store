import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Listing = () => {
  const [name, setName] = useState("");
  const [isbn, setISBN] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");

  return (
    <div className="container mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            placeholder="Enter Book Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            onChange={(event) => setISBN(event.target.value)}
            value={isbn}
            type="text"
            placeholder="ISBN Number"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={(event) => setPrice(event.target.value)}
            value={price}
            type="text"
            placeholder="Enter Book Price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cover Picture</Form.Label>
          <Form.Control
            onChange={(event) => setPicture(event.target.files[0])}
            value={picture}
            type="file"
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Add Book
        </Button>
      </Form>
    </div>
  );
};

export default Listing;
