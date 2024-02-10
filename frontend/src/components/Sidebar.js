import React from 'react'
import { Container, Navbar, Nav, Row, Form, Button, NavDropdown, Stack} from 'react-bootstrap'
// const categories = ['Electronics', 'Clothing', 'Books'];
function Sidebar() {
    
  return (
    
    < >
                   <Nav className="col-md-12 d-none d-md-block bg-light "
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
           
            <Nav.Item>
                {/* <Nav.Link href="/home">Active</Nav.Link> */}
              

            </Nav.Item>
            <Nav.Item>
                {/* <Nav.Link eventKey="link-1">Link</Nav.Link> */}
               
                <Stack >
                
                    <div className="p-2">
                    <h5>Category</h5>
                    <Form.Check // prettier-ignore
                    type="radio"
                    value='stiched'
                    label='stiched'
          />
            <Form.Check // prettier-ignore
                    type="radio"
                    value='unstiched'
                    label='unstiched'
          />
                    </div>
                    <div className="p-2">
                    <h5>Price</h5>
                    <Form.Check // prettier-ignore
                    type="checkbox"
                    
                    label='500-1000'
          />
            <Form.Check // prettier-ignore
                    type="checkbox"
                    
                    label='1001-2000'
          />
                    </div>
                    <div className="p-2">
                    <h5>Category</h5>
                    <Form.Check // prettier-ignore
                    type="radio"
                    
                    label='stiched'
          />
            <Form.Check // prettier-ignore
                    type="radio"
                    
                    label='unstiched'
          />
                    </div>
                </Stack>
                
            </Nav.Item>
            <center>
                <Button className='py-2'>Apply</Button></center>
            </Nav>
      
    </>
  )
}

export default Sidebar
