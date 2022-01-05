import React, { useState, useEffect } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import FormContainer from "../components/FormContainer";

const Login = ({location , history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Login To eHealth</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label> 
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Dont Have Account.Register Here{" "}
          <Link to={redirect ? `/Signup?redirect=${redirect}` : "/Signup"}>
            Click
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
