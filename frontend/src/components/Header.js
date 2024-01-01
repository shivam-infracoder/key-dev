import React from 'react'

import { Container, Navbar, Nav, Row, Form, Button, NavDropdown} from 'react-bootstrap'

function Header() {
  return (
    
        <header>
            <Navbar expand="lg"  bg='dark' style={{backgroundcolor:'white'}} data-bs-theme="dark" className="bg-body-tertiary" collapseOnSelect>
                         <Container>
                            <Navbar.Brand href="/">
                              Keysaria Labels
                            {/* <img
                                src="logo.jpeg"
                                width="120"
                                height="35"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                                
                              /> */}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                
                                <NavDropdown title="Stiched" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Suits</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">
                                    Kurtis
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Bottoms</NavDropdown.Item>
                                 
                                  <NavDropdown.Item href="#action/3.4">
                                   Coord Sets
                                  </NavDropdown.Item>
                                 </NavDropdown>
                                 <NavDropdown title="Unstiched" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Cotton</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">
                                    Silk
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Muslin</NavDropdown.Item>
                                 
                                  <NavDropdown.Item href="#action/3.4">
                                  Organza
                                  </NavDropdown.Item>
                                 </NavDropdown>
                                
                 
                                &nbsp;                          
                                <Nav.Link href="#home"><i className='fas fa-shopping-cart'></i></Nav.Link>
                                &nbsp;
                                <Nav.Link href="#link"><i className='fas fa-user'></i></Nav.Link>
                               
             
                            </Nav>
                            </Navbar.Collapse>
                          </Container>
            </Navbar>

          

        </header>
    
  )
}

export default Header
