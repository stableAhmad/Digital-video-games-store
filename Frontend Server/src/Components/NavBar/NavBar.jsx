import styles from './NavBar.module.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';

function NavBar() {
  return (
    <div className="container-fluid w-100 m-0 mb-5">
      <div className="row">
        <Navbar bg="transparent" expand="lg" className='nav2'>
          <Container fluid>
            <Nav.Link as={Link} to={"/"} className='text-white fs-3'>
              <FontAwesomeIcon icon={faGamepad} spin style={{ color: "#b50000" }} />
              Level Up
            </Nav.Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              </Nav>
              <Form className="d-flex w-75 mx-auto">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className={`me-2 border-0 ${styles.searchColor}`}
                  aria-label="Search"
                />
                <Button variant="outline-danger" className='mx-2'>Search</Button>
                <Nav.Link as={Link} to={"register"} className='text-white m-2'>Register</Nav.Link>
                <Nav.Link as={Link} to={"Login"} className='text-white m-2'>Login</Nav.Link>
              </Form>
              <DarkMode/>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
