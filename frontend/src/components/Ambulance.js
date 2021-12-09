import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Ambulance({ambulance}) {
    return (
        <Card className="my-3 P-3 rounded">
      <Link to={`ambulance/${ambulance._id}`}>
        <Card.Img src={ambulance.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/ambulance/${ambulance._id}`}>
          <strong>{ambulance.name}</strong>
        </Link>
      </Card.Body>
    </Card>
    )
}
