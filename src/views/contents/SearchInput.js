import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import SearchList from './SearchList';
import "../../style/card.css";
import { FaSearch } from 'react-icons/fa';


function SearchInput({ details }) {
  const [searchInput, setSearchInput] = useState("");

  const filteredCustomers = details.filter(
    customer => {
      return (
        customer
          .name
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        customer
          .email
          .toLowerCase()
          .includes(searchInput.toLowerCase())

      );
    }
  );

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  function searchList() {
    return (
        <Row>
          <SearchList filteredCustomers={filteredCustomers} />
        </Row>
    );
  }

  return (
    <div>
      <Row>
        <h2 className="title">My Customers</h2>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3 input-group">
            <InputGroup.Text id="basic-addon1" ><FaSearch /></InputGroup.Text>
            <FormControl
              placeholder="Customer's Name"
              aria-label="Customer's Name"
              aria-describedby="basic-addon1"
              type="search"
              onChange={handleChange}
            />
          </InputGroup>
          {searchList()}
        </Col>
      </Row>
    </div>
  );
}
export default SearchInput;


