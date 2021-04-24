import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import UserCard from "./../UserCard/UserCard";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLogin] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleLogout() {
    setLogin(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email === "foo" && password === "bar") {
      setLogin(true);
    }
  }

  return (
    <div className="Login">
      {isLoggedIn ? (
        <UserCard events={{ handleLogout: handleLogout }} />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              // autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      )}
    </div>
  );
}
