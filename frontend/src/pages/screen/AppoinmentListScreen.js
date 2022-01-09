import React, { useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AppoinmentListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo || userInfo.isAdmin) {
      //
    } else {
      history.push("/Login");
    }
  }, [dispatch, history, userInfo]);

  console.log(userInfo);

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure")) {
      //delete doctor
    }
  };

  return (
    <>
      <Row className="algin-items-center">
        <Col>
          <h1>Appoinment</h1>
        </Col>
        <Col className="text-right"></Col>
      </Row>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>NAME</th>
              <th>AGE</th>
              <th>Date</th>
              <th>SYMPTOM</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hridoy</td>
              <td>22</td>
              <td>10/1/2021</td>
              <td>headache</td>
              <td>
                <Link to={`/admin/doctor/`}>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i>
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler()}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
    </>
  );
};

export default AppoinmentListScreen;
