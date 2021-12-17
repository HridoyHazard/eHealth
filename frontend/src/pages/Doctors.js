import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listDoctors } from "../actions/doctorsAction.js";
import Doc from "../components/Doc";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";

export default function Doctors() {
  const dispatch = useDispatch();

  const doctorsList = useSelector((state) => state.doctorsList);
  const { loading, error, doctors } = doctorsList;

  useEffect(() => {
    dispatch(listDoctors());
  }, [dispatch]);

  return (
    <div>
      <h1>Active Doctors</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {doctors.map((doctors) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Doc doctors={doctors} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
