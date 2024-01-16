import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/FirebaseContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [navigate, firebase]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.signInUser(email, password);
  };
  return (
    <>
     <h1 className="container d-flex justify-content-center mt-5">Login</h1>
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <div className="d-flex">
          <Button variant="dark" type="submit">
            Login
          </Button>
          <button
            onClick={firebase.signInWithGoogle}
            className="btn btn-dark ms-2"
          >
            Google
          </button>
          <Button className="btn btn-dark ms-2" href="/register">Register Account</Button>
        </div>
      </Form>
    </div>
    </>
  );
};

export default LoginPage;
