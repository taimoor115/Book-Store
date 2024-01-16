import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/FirebaseContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
    console.log("Signing ");
    const result = await firebase.signUpWithEmailPassword(email, password);
    console.log("Success", result);
  };
  return (
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

        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default Register;
