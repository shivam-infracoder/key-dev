import React from 'react'

import { Container, Navbar, Nav, Row, Form, Button } from 'react-bootstrap'

function Header() {
  return (
    
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" bg='' collapseOnSelect>
                         <Container>
                            <Navbar.Brand href="/">Keysaria Labels</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home"><i></i>Stiched</Nav.Link>
                                <Nav.Link href="#home">Unstiched</Nav.Link>
                               
                                <Nav.Link href="#home"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                                <Nav.Link href="#link"><i className='fas fa-user'></i>Login</Nav.Link>
                               
                            </Nav>
                            </Navbar.Collapse>
                          </Container>
            </Navbar>
        </header>
    
  )
}

export default Header
