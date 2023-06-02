import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="pagetitle" href="../index.html">Buy Online</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="bestSellers">Best Sellers</Nav.Link>
            <Nav.Link href="productos">Products</Nav.Link>
            <CartWidget />
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar