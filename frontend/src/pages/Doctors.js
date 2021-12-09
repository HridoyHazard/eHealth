import React,{useState,useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import Doc from "../components/Doc";
import axios from 'axios'

export default function Doctors() {

  const [doctors, setdoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get("/api/doctors");

      setdoctors(data);
    }
    fetchDoctors();

  }, []);

  return (
    <div>
      <h1>Active Doctors</h1>
      <Row>
        {doctors.map((doctors) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Doc doctors = {doctors} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
