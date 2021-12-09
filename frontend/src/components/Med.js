import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Med({ meds }) {
  return (
    <Card className="my-3 P-3 rounded">
      <Link to={`meds/${meds._id}`}>
        <Card.Img src={meds.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/meds/${meds._id}`}>
          <Card.Title as="div">
            <strong>{meds.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">{meds.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
