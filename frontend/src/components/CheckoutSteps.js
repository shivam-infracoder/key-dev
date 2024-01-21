import React from 'react'
import { Nav, NavItem} from 'react-bootstrap'
import { LinkContainer  } from 'react-router-bootstrap'

function CheckoutSteps({step1,step2,step3}) {

    return (
        <Nav className='justify-content-center mb-4'>
            <NavItem>
                {step1 ? (
                    <LinkContainer to='/shipping'>
                    <Nav.Link>Sanodok Coming</Nav.Link>
                </LinkContainer>
                ): (
                    <Nav.Link disabled>Sandook Coming</Nav.Link>
                )}
                
                </NavItem>
            <NavItem>
                {step2? (
                    <LinkContainer to='slotbooking'>
                    <Nav.Link>Slot Booking</Nav.Link>
                </LinkContainer>
                ): (
                    <Nav.Link disabled>Slot Booking</Nav.Link>
                )}
                
            </NavItem>
            <NavItem>
                {step3 ? (
                    <LinkContainer>
                    <Nav.Link>Place your Sandook</Nav.Link>
                </LinkContainer>
                ): (
                    <Nav.Link disabled>Place your Sandook</Nav.Link>
                )}
                
            </NavItem>
        </Nav>
      )
  
}

export default CheckoutSteps


