import styles from './NavBar.module.css'
import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  // Initialize the useNavigate hook from the react-router-dom library
  let navigate = useNavigate();

  // Get the cartItemsCount and user data from the CartContext
  let { cartItemsCount, saveUserData, userData,setCartItemsCount } = useContext(CartContext);


  useEffect(() => {

  }, [cartItemsCount])
  // Function to handle user logout
  function handleLogout() {
    // Remove the user token from the local storage
    localStorage.removeItem('userToken');
    // Clear the user data in the CartContext
    saveUserData(null);
    // Navigate to the Login page
    navigate('/Login');
  }

  return (
    <div className="container-fluid w-100 m-0 mb-5">
      <div className="row">
        <Navbar bg="" expand="lg" className={`${styles.navBarStyle}fixed-top`} >
          <Container fluid>
            {/* Logo and brand name */}
            <Nav.Link as={Link} to={"/"} className='text-white fs-3'>
              <FontAwesomeIcon icon={faGamepad} spin style={{ color: "#b50000" }} />
              Level Up
            </Nav.Link>
            {/* Hamburger menu */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              </Nav>
              {/* Search bar */}
              <Form className="d-flex w-75 mx-auto align-items-center">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className={`me-2 border-0 ${styles.searchColor}  `}
                  aria-label="Search"
                />
                <Button variant="outline-danger" className='mx-2'>Search</Button>
                {/* Conditional rendering of Register and Login links based on user data */}
                {userData == null ?
                  <>
                    <Nav.Link as={Link} to={"register"} className='text-white m-2'>Register</Nav.Link>
                    <Nav.Link as={Link} to={"Login"} className='text-white m-2'>Login </Nav.Link>
                  </>
                  :
                  <>
                    {/* Cart link with cartItemsCount badge */}
                    <Nav.Link as={Link} to={"cart"} className='text-white m-2'>
                      <div>
                        <i class="fas fa-shopping-cart fa-lg text-white position-relative"></i>
                        <div className="badge bg-danger position-absolute start">{cartItemsCount}</div>
                      </div>
                    </Nav.Link>
                    {/* Logout link */}
                    <span onClick={handleLogout} className='text-white mx-5 cursor-pointer'>Logout</span>
                  </>
                }
              </Form>


            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;