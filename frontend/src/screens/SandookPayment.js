import React, {useState, useEffect} from 'react'
import {  Form, Button, Container, Row, Col, Card, ListGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import loader from '../components/loader'
import Message from '../components/Message'
import {  Link,useParams, useNavigate, useLocation, useSearchParams} from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'

function SandookPayment() {
    const navigate = useNavigate()

    const [date,setDate] =useState('')
    const [time,setTime] =useState('')
 
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const submitHandler = (e) =>{
        e.preventDefault()
        navigate('/slotbooking')

        localStorage.setItem('date',JSON.stringify(date))
        localStorage.setItem('time',JSON.stringify(time))
    }

  return (
    <Container>
        <CheckoutSteps step1 step2 />
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>

                <h2>Pay with</h2>
                
                <Form onSubmit={submitHandler}>
                    {/* <Form.Group controlId='address' className='my-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required onChange={(e)=> setAddress(e.target.value)} />
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>UPI <i class="fa-brands fa-google-pay"></i></Form.Label>
        <Form.Control  required   />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Cards <i class="fas fa-credit-card" aria-hidden="true"></i> <i class="fa fa-cc-visa"></i></Form.Label>
        <Form.Control   />
      </Form.Group>
  

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Net Banking <i class="fas fa-university" aria-hidden="true"></i></Form.Label>
        <Form.Control  />
      </Form.Group>
  
  
     

    
                        <Button type='submit' className='my-3'>
                            Continue
                        </Button>
                </Form>
                            </Col>
<Col xs={4}>
{/* <h2>Sandook Calculation</h2> */}

<Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h5>Total  </h5>
                  Rs. {localStorage.getItem('finalPrice')}
                  
                </ListGroup.Item>

                <ListGroup.Item>
              
                <h5>Advance Payment  </h5>
                  Rs. {Number(localStorage.getItem('finalPrice'))*10/100}
                  
                </ListGroup.Item>
                <ListGroup.Item>
              
              <h5>Balance </h5>
                Rs. { Number(localStorage.getItem('finalPrice'))- Number(localStorage.getItem('finalPrice'))*10/100}
                
              </ListGroup.Item>
              </ListGroup>
          </Card>
</Col>
        </Row>
      
      {/* contact details 
      name 
      address
      pin codes limited  // noida gurgaon */}


      {/* date  */}
      {/* time slot  9-11 11 -1 1-3 3-5 */}
    </Container>
  )
}

export default SandookPayment
