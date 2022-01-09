import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import FormContainer from "../../components/FormContainer";
import '../../css/box.css'

const AppoinmentScreen = ({dispatch, history }) => {

  dispatch = useDispatch()
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [symptom, setSymptom] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  const appoinmentSuccessHandler = () => {
    alert("Your Data is Submittd!")
  };

  return (
    <FormContainer>
      <h1>Appoinment</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Age"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="symptom">
          <Form.Label>Symptom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Symptom"
            value={symptom}
            required
            onChange={(e) => setSymptom(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          onClick={appoinmentSuccessHandler}
        >
          Get Appointment
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AppoinmentScreen;
