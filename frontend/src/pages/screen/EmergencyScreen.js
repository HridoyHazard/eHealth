import React,{useState,useEffect} from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export const EmergencyScreen = ({ match }) => {

  const [amb, setamb] = useState({});

  useEffect(() => {
    const fetchamb = async () => {
      const { data } = await axios.get(`/api/ambulance/${match.params.id}`);

      setamb(data);
    }
    fetchamb();

  }, [match]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/Emergency">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={amb.image} alt={amb.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{amb.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Service: {amb.service}</ListGroup.Item>
            <ListGroup.Item>{amb.degree}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Type: </Col>
                  <Col>{amb.type}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Hotline: </Col>
                  <Col>{amb.hotline}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button>Get Service</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default EmergencyScreen;
