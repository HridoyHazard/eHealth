import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { listMeds } from "../actions/medsAction.js";
import Med from "../components/Med.js";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";

export default function Medicine() {
  const dispatch = useDispatch();

  const medsList = useSelector((state) => state.medsList);
  const { loading, error, meds } = medsList;

  useEffect(() => {
    dispatch(listMeds());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Medicine</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {meds.map((med) => (
            <Col sm={12} md={6} lg={4} xl={3} >
              <Med med={med} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
