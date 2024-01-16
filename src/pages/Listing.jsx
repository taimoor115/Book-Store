import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useFirebase } from "../context/FirebaseContext";

const Listing = () => {
  const [name, setName] = useState("");
  const [isbn, setISBN] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const firebase = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewListing(name, isbn, price, picture);
  };
  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            placeholder="Enter Book Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            onChange={(event) => setISBN(event.target.value)}
            value={isbn}
            type="text"
            placeholder="ISBN Number"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={(event) => setPrice(event.target.value)}
            value={price}
            type="text"
            placeholder="Enter Book Price"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cover Picture</Form.Label>
          <Form.Control
            onChange={(event) => setPicture(event.target.files[0])}
            type="file"
            required
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
