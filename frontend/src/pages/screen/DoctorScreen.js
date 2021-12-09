import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import axios from 'axios'

export const DoctorScreen = ({ match }) => {

  const [doc, setdoc] = useState({});

  useEffect(() => {
    const fetchdoc = async () => {
      const { data } = await axios.get(`/api/doctors/${match.params.id}`);

      setdoc(data);
    }
    fetchdoc();

  }, [match]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/Doctors">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={doc.image} alt={doc.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{doc.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{doc.degree}</ListGroup.Item>
            <ListGroup.Item>Specialist: {doc.specialist}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Chamber: </Col>
                  <Col>
                    <strong>{doc.Chamber}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Available: </Col>
                  <Col>
                    {doc.Available}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                    <Button>
                      Get Appoinment
                    </Button>
                  </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default DoctorScreen;
