import React from 'react';
import Card from './CustomerInfoCard';
import "../../style/card.css";
import Row from "react-bootstrap/Row"

function SearchList({ filteredCustomers }) {
  //with map fucntion you render different card for each customer by passing on parameters.
  const filtered = filteredCustomers.map(customer => <Card key={customer._id} customer={customer} />);
  return (
    <Row>
      <div className="filteredContainer">
        {filtered}
      </div>
    </Row>
  );
}

export default SearchList;