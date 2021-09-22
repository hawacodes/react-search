import React from 'react';
import Card from './CustomerInfoCard';
import "../../style/card.css";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function SearchList({ filteredCustomers }) {
  //with map fucntion you render different card for each customer by passing on parameters.
  const filtered = filteredCustomers.map(customer => <Card key={customer._id} customer={customer} />);
  return (
    <Row>
      <Col>
      <div className="filteredContainer">
        {filtered}
      </div>
      </Col>
    </Row>
  );
}

export default SearchList;