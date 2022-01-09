import React, { useEffect } from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listAmbulanceDetails } from "../../actions/ambulancesAction.js";
import Loader from "../../components/Loader.js";
import Message from "../../components/Message.js";

export const EmergencyScreen = ({ match }) => {
  const dispatch = useDispatch();

  const ambulancesDetails = useSelector((state) => state.ambulancesDetails);
  const { loading, error, ambulances } = ambulancesDetails;
  useEffect(() => {
    dispatch(listAmbulanceDetails(match.params.id));
  }, [dispatch, match]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/Emergency">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={ambulances.image} alt={ambulances.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{ambulances.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>Service: {ambulances.service}</ListGroup.Item>
              <ListGroup.Item>{ambulances.degree}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Type: </Col>
                    <Col>{ambulances.type}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Hotline: </Col>
                    <Col>{ambulances.hotline}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button>Call Now</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
export default EmergencyScreen;
