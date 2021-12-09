import React,{useState,useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import Ambulance from "../components/Ambulance";
import axios from "axios";

export default function Emergency() {

  const [ambulance, setambulance] = useState([]);

  useEffect(() => {
    const fetchambulance = async () => {
      const { data } = await axios.get("/api/ambulance");

      setambulance(data);
    }
    fetchambulance();

  }, []);

  return (
    <div>
      <h1>Emergency Ambulance Services</h1>
      <Row>
        {ambulance.map((ambulance) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Ambulance ambulance = {ambulance} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
