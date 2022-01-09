import React, { useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message.js";
import Loader from "../../components/Loader.js";
import { Link } from "react-router-dom";
import { listDoctors } from "../../actions/doctorsAction.js";

const DoctorListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const doctorsList = useSelector((state) => state.doctorsList);
  const { loading, error, doctors } = doctorsList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo || userInfo.isAdmin) {
      dispatch(listDoctors());
    } else {
      history.push("/Login");
    }
  }, [dispatch, history, userInfo]);

  console.log(userInfo)

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure")) {
      //delete doctor
    }
  };
  const createDoctorHandler = (doctor) => {
    //add doctor
  };

  return (
    <>
      <Row className="algin-items-center">
        <Col>
          <h1>Doctors</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createDoctorHandler}>
            <i className="fas fa-plus"></i>Add Doctor
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
              <th>DEGREE</th>
              <th>SPECIALIST</th>
              <th>Chamber</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor._id}>
                <td>{doctor._id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.degree}</td>
                <td>{doctor.specialist}</td>
                <td>{doctor.Chamber}</td>
                <td>
                  <Link to={`/admin/doctor/${doctor._id}`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(doctor._id)}
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

export default DoctorListScreen;
