import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Med from "../components/Med";
import axios from "axios";

export default function Medicine() {
  const [meds, setmeds] = useState([]);

  useEffect(() => {
    const fetchMeds = async () => {
      const { data } = await axios.get("/api/meds");

      setmeds(data);
    }
    fetchMeds();

  }, []);

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
