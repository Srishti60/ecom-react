import React, { useState } from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DataApi from '../../API/Data'; 
import ImageCard from '../card';

function NavScrollExample() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const data = DataApi(); 

 
  const filterData = () => {
    return data.filter(item => {
      return (
        item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.description.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    });
  };

 
  const handleSearchChange = event => {
    setSearchKeyword(event.target.value);
  };
  const filteredData = filterData();

  return (
    <Navbar expand="lg"  className="bg-body-tertiary  navbar-flex-row"  >
      <Container >
        <Navbar.Brand href="#">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          </Nav>
          <Form className="d-flex">
          <Form.Control
              id="filter"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchKeyword}
              onChange={handleSearchChange} 
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
       <Container >
        <ImageCard filteredData={filteredData} />
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
