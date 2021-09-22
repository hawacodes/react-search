import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import "../../style/card.css";

function CustomerInfoCard({ customer }) {
  return (
    <div className="card-container">
      <Col md='2'>
        <Card className="card">
          <div className="overflow">
            <Card.Img variant="top" className="card-image-top" src={customer.picture} />
          </div>
          <Card.Body>
            <Card.Title>{customer.name}</Card.Title>
            <Card.Text>
              {customer.about}
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>{customer.company}</ListGroup.Item>
              <ListGroup.Item>{customer.email}</ListGroup.Item>
              <ListGroup.Item>{customer.balance}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </div>



  );
}

export default CustomerInfoCard;