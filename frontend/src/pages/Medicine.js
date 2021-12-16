import React, {useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Row, Col } from "react-bootstrap";
import Med from "../components/Med.js";
import {listMeds} from "../actions/medsAction.js"

export default function Medicine() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listMeds())
  }, [dispatch]);

  const meds = []

return (
    <>
      <h1>Latest Medicine</h1>
      <Row>
        {meds.map((meds) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Med meds={meds} />
          </Col>
        ))}
      </Row>
    </>
  );
}
