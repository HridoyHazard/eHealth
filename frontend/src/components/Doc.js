import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Doc({ doctors }) {
  return (
    <Card className="my-3 P-3 rounded">
      <Link to={`doctors/${doctors._id}`}>
        <Card.Img src={doctors.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/doctors/${doctors._id}`}>
          <strong>{doctors.name}</strong>
        </Link>
        <Card.Text as="p">{doctors.degree}</Card.Text>
        <Card.Text as="p">{doctors.specialist}</Card.Text>
      </Card.Body>
    </Card>
  );
}
