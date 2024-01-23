import React, {useState, useEffect} from 'react'
import {  Form, Button, Container, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import loader from '../components/loader'
import Message from '../components/Message'
import {  Link,useParams, useNavigate, useLocation, useSearchParams} from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'

function SlotBookScreen() {
    const navigate = useNavigate()

    const [date,setDate] =useState('')
    const [time,setTime] =useState('')
 


    const submitHandler = (e) =>{
        e.preventDefault()
        navigate('/placesandook')

        localStorage.setItem('date',JSON.stringify(date))
        localStorage.setItem('time',JSON.stringify(time))
    }

  return (
    <Container>
        <CheckoutSteps step1 step2 />
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>

                <h1>Slot Booking</h1>
                <Form onSubmit={submitHandler}>
                    {/* <Form.Group controlId='address' className='my-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required onChange={(e)=> setAddress(e.target.value)} />
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Select Date</Form.Label>
        <Form.Control type='date' required onChange={(e)=> setDate(e.target.value)}  />
      </Form.Group>
      <Form.Select defaultValue="ghaziabad" required onChange={(e)=> setTime(e.target.value)} > 
      <Form.Label>Select Slot</Form.Label>
          <option>Choose...</option>

            <option value="9:00 A.M - 11:00 A.M">9:00 A.M - 11:00 A.M</option>
            <option value='11:00 A.M - 01:00 P.M'>11:00 A.M - 01:00 P.M</option>
            <option value="01:00 P.M - 03:00 P.M">01:00 P.M - 03:00 P.M</option>
            <option value="03:00 P.M - 05:00 P.M">03:00 P.M - 05:00 P.M</option>
            
            {/* <option>...</option> */}
          </Form.Select>

     

    
                        <Button type='submit' className='my-3'>
                            Continue
                        </Button>
                </Form>
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

export default SlotBookScreen
