import React from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const NavBar = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>SearchIT</Navbar.Brand>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
            value={search}
            onChange={handleChange}
          />
          {/* <Button
            variant='outline-success bg-white'
            onClick={() => setSearch(search)}
          >
            Search
          </Button> */}
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavBar;
