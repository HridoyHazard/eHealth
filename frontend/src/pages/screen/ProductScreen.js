import React,{useState,useEffect} from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';

const ProductScreen = ({ match }) => {
  const [med, setmed] = useState({});

  useEffect(() => {
    const fetchmed = async () => {
      const { data } = await axios.get(`/api/meds/${match.params.id}`);

      setmed(data);
    }
    fetchmed();

  }, [match]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/Medicine">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={med.image} alt={med.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{med.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: {med.price}</ListGroup.Item>
            <ListGroup.Item>Description: {med.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{med.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {med.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                    <Button disabled={med.countInStock === 0}>
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
