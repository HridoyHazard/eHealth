import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Med({ med }) {
  return (
    <Card className="my-3 P-3 rounded">
      <Link to={`meds/${med._id}`}>
        <Card.Img src={med.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/meds/${med._id}`}>
          <Card.Title as="div">
            <strong>{med.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">{med.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
