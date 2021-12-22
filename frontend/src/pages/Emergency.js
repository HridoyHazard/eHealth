import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Ambulance from "../components/Ambulance.js";
import { listAmbulances } from "../actions/ambulancesAction.js";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";

export default function Emergency() {
  
  const dispatch = useDispatch();

  const ambulancesList = useSelector((state) => state.ambulancesList);
  const { loading, error, ambulances } = ambulancesList;

  useEffect(() => {
    dispatch(listAmbulances());
  }, [dispatch]);

  return (
    <div>
      <h1>Emergency Ambulance Services</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {ambulances.map((ambulances) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Ambulance ambulances={ambulances} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
