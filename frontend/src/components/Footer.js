import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'

function Footer() {
  return (
    <footer style={{backgroundColor:'black'}}>
        <Container fluid> 
          <Row >
            <Col sm={12} md={6} lg={4} className='py-3' > 
               <img
                   src="logo1.png"
                   width="200"
                   height="100"
                   className="d-inline-block align-top"
                   alt="React Bootstrap logo"
                                  
                                />
            </Col>
            <Col className='py-3' sm={12} md={6} lg={4}>
              <h4>Quick Links</h4>
              <Stack gap={1}>
                <div className="p-1">Privacy Policy</div>
                <div className="p-1">Shipping & Exchange Policy</div>
                <div className="p-1">Terms & Condtions </div>
              </Stack>
            </Col>
            <Col className='py-3' sm={12} md={6} lg={4}>
              <h4>Information</h4>
              <Stack gap={1}>
                <div className="p-1">About Us</div>
                <div className="p-1">Wholsale Enquiry</div>
                {/* <div className="p-1">Third item</div> */}
              </Stack>
            </Col>

        
          </Row>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; Keysaria (demo-app)
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
