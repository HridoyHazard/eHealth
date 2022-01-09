import React, { useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { listMeds, deleteMed, createMed } from "../../actions/medsAction";
import { Link } from "react-router-dom";
import { MED_CREATE_RESET } from "../../constants/medsConstants";

const MedicineListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const medsList = useSelector((state) => state.medsList);
  const { loading, error, meds } = medsList;

  console.log(medsList)
  console.log(loading)

  const medsDelete = useSelector((state) => state.medsDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = medsDelete;

  const medsCreate = useSelector((state) => state.medsCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    med: createdMeds,
  } = medsCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {

    dispatch({ type: MED_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/Login");
    }
    if (successCreate) {
      history.push(`/admin/med/${createdMeds._id}/edit`);
    } else {
      dispatch(listMeds());
    }

  }, [dispatch, history, userInfo, successDelete, successCreate, createdMeds]);

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure")) {
      dispatch(deleteMed(id));
    }
  };
  const createMedicineHandler = () => {
    dispatch(createMed())
  };

  return (
    <>
      <Row className="algin-items-center">
        <Col>
          <h1>Medicines</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createMedicineHandler}>
            <i className="fas fa-plus"></i>Add Medicine
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
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
            {meds.map((med) => (
              <tr key={med._id}>
                <td>{med._id}</td>
                <td>{med.name}</td>
                <td>{med.price}</td>
                <td>{med.category}</td>
                <td>{med.brand}</td>
                <td>
                  <Link to={`/admin/med/${med._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(med._id)}
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

export default MedicineListScreen;
