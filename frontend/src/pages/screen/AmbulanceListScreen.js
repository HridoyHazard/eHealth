import React, { useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { listAmbulances } from "../../actions/ambulancesAction";

const AmbulanceListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const ambulancesList = useSelector((state) => state.ambulancesList);
  const { loading, error, ambulances } = ambulancesList;

  console.log(ambulancesList);
  console.log(loading);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo || userInfo.isAdmin) {
      dispatch(listAmbulances());
    } else {
      history.push("/Login");
    }
  }, [dispatch, history, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure")) {
      //Delete Ambulance
    }
  };
  const createAmbulanceHandler = () => {
    //Add Ambulances
  };

  return (
    <>
      <Row className="algin-items-center">
        <Col>
          <h1>Ambulances</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createAmbulanceHandler}>
            <i className="fas fa-plus"></i>Add Ambulance
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ambulances.map((ambulance) => (
              <tr key={ambulance._id}>
                <td>{ambulance._id}</td>
                <td>{ambulance.name}</td>
                <td>{ambulance.type}</td>
                <td>{ambulance.service}</td>
                <td>{ambulance.available}</td>
                <td>
                  <Link to={`/admin/ambulance/${ambulance._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(ambulance._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default AmbulanceListScreen;
