import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container >
        <Navbar.Brand href="">Bookify</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="ms-5" href="/">Home</Nav.Link>
          <Nav.Link className="ms-2" href="/book/list">Add Listing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
