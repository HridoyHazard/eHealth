import React,{useEffect} from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listMedDetails } from "../../actions/medsAction.js";
import Loader from "../../components/Loader.js";
import Message from "../../components/Message.js";



const ProductScreen = ({ match }) => {

  const dispatch = useDispatch()

  const medsDetails = useSelector(state => state.medsDetails)
  const {loading , error , med} = medsDetails

  useEffect(() => {
    dispatch(listMedDetails(match.params.id))
   
  }, [dispatch, match]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/Medicine">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
      )}
    </>
  );
};

export default ProductScreen;
