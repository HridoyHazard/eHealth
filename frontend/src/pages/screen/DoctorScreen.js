import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader.js";
import Message from "../../components/Message.js";
import { listDoctorDetails } from "../../actions/doctorsAction.js";

export const DoctorScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const doctorsDetails = useSelector((state) => state.doctorsDetails);
  const { loading, error, doctor } = doctorsDetails;

  useEffect(() => {
    dispatch(listDoctorDetails(match.params.id));
  }, [dispatch, match]);

  const getAppoinmentHandler = () => {
    history.push('/Login?redirect=appoinment')
  }
  const chatHandler = () => {
    history.push('/Login?redirect=chat')
  }
  return (
    <>
      <Link className="btn btn-light my-3" to="/Doctors">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={doctor.image} alt={doctor.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{doctor.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>{doctor.degree}</ListGroup.Item>
              <ListGroup.Item>Specialist: {doctor.specialist}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Chamber: </Col>
                    <Col>
                      <strong>{doctor.Chamber}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Available: </Col>
                    <Col>{doctor.Available}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button  type="button"
                    className="btn-block"
                    onClick={getAppoinmentHandler}> Get Appoinment</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    onClick={chatHandler}
                  >
                    Chat Now
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
export default DoctorScreen;
