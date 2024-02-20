import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'


import { Container, Navbar, Nav, Row, Form, Button, NavDropdown} from 'react-bootstrap'

function Header() {
  return (
    
        <header>
            <Navbar style={{padding:'0.2rem'}} expand="lg"  bg='dark'  data-bs-theme="dark" className="bg-body-tertiary" collapseOnSelect>
                         <Container >
                           <LinkContainer to='/'>
                              <Navbar.Brand>
                                {/* Keysaria Labels */}
                              <img 
                                  src="logo1.png"
                                  width="140rem"
                                  height="58rem"
                                  className=""
                                  alt="Keysaria logo"
                                  
                                />
                              </Navbar.Brand>
                            </LinkContainer>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                
                                {/* <NavDropdown title="Stiched" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Suits</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">
                                    Kurtis
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Bottoms</NavDropdown.Item>
                                 
                                  <NavDropdown.Item href="#action/3.4">
                                   Coord Sets
                                  </NavDropdown.Item>
                                 </NavDropdown> */}
                                 <LinkContainer to='/mysandook'>
                                  <Nav.Link>Book Sandook</Nav.Link>
                                 </LinkContainer>
                                 {/* <LinkContainer to='/category/stiched'>
                                  <Nav.Link>stiched</Nav.Link>
                                 </LinkContainer>
                                 <LinkContainer to='/category/unstiched'>
                                  <Nav.Link>Unstiched</Nav.Link>
                                 </LinkContainer> */}
                                 {/* <NavDropdown title="Unstiched" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Cotton</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">
                                    Silk
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Muslin</NavDropdown.Item>
                                 
                                  <NavDropdown.Item href="#action/3.4">
                                  Organza
                                  </NavDropdown.Item>
                                 </NavDropdown>
                                 */}
                                <Nav.Link > <Link to='/cart/'><i className='fas fa-heart'></i></Link></Nav.Link>
                                &nbsp;
                               
                                  <Nav.Link > <Link to='/cart/'> <i className='fa-solid fa-box-open'></i></Link></Nav.Link>                          
                                <Nav.Link > <Link to='/cart/'><i className='fas fa-shopping-cart'></i></Link></Nav.Link>
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
