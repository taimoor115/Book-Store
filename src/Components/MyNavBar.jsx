import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useFirebase } from "../context/FirebaseContext";

const MyNavBar = () => {
  const firebase = useFirebase();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="">Bookify</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/book/list">Add Listing</Nav.Link>
          <Nav.Link href="/book/orders">Orders</Nav.Link>
          <Nav.Link onClick={firebase.loggedOut()} href="/login">
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
