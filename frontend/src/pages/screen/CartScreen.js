import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../../components/Message";
import { addToCart, removeFromCart } from "../../actions/cartAction";

const CartScreen = ({ match, location, history }) => {
  const medId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (medId) {
      dispatch(addToCart(medId, qty));
    }
  }, [dispatch, medId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/Login?redirect=shipping");
  };
  return (
    <>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={7}>
          {cartItems.length === 0 ? (
            <Message>
              Your Cart Is Empty <Link to="/"> Go Back </Link>{" "}
            </Message>
          ) : (
            <ListGroup variant="flush">
              <br></br>
              <br></br>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.med}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/med/${item.med}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price}tk</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.med, Number(e.target.value)))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.med)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col sm={5}>
          <Col sm={5}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h2>
                  
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed()}
                    tk
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup>
            </Card>
          </Col>
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
};

export default CartScreen;
