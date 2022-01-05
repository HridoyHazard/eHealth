import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Ambulance({ambulances}) {
    return (
        <Card className="my-3 P-3 rounded">
      <Link to={`ambulance/${ambulances._id}`}>
        <Card.Img src={ambulances.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/ambulance/${ambulances._id}`}>
          <strong>{ambulances.name}</strong>
        </Link>
      </Card.Body>
    </Card>
    )
}
