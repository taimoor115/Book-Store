import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/FirebaseContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing ");
    const result = await firebase.signUpWithEmailPassword(email, password);
    console.log("Success", result);
  };
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We will never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            placeholder="Password"
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
