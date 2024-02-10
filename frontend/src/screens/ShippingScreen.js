import React, {useState, useEffect} from 'react'
import {  Form, Button, Container, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import loader from '../components/loader'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import {  Link,useParams, useNavigate, useLocation, useSearchParams} from 'react-router-dom'


function ShippingScreen() {
    const navigate = useNavigate()
    const [address,setAddress] =useState('')
    const [address2,setAddress2] =useState('')
    const [city,setCity] =useState('')
    const [state,setState] =useState('')
    const [postalCode,setPostalCode] =useState('')
    const [country,setCountry] =useState('')
    const [date,setDate] =useState('')
    const [time,setTime] =useState('')
    const [contact,setContact] =useState('')
    const [name,setName] =useState('')


    const submitHandler = (e) =>{
        e.preventDefault()
        // alert('submitted')

        const shippingAdd = {
            "address1":address,
            "address2":address2,
            "city":city,
            "state":state,
            "postal":postalCode
        }
        localStorage.setItem('address1',JSON.stringify(address))
        localStorage.setItem('address2',JSON.stringify(address2))
        localStorage.setItem('city',JSON.stringify(city))
        localStorage.setItem('state',JSON.stringify(state))
        localStorage.setItem('postal',JSON.stringify(postalCode))
        localStorage.setItem('shippingADDR',JSON.stringify(shippingAdd))
        localStorage.setItem('name',JSON.stringify(name))
        localStorage.setItem('contact',JSON.stringify(contact))

        navigate('/sandookPayment')
    }

  return (
    <Container>
        <CheckoutSteps step1 />
        {/* <CheckoutSteps /> */}
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>

                <h1>Book Appointment</h1>
                <Form onSubmit={submitHandler}>
                    {/* <Form.Group controlId='address' className='my-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required onChange={(e)=> setAddress(e.target.value)} />
                    </Form.Group> */}
                    <Row>
                      <Col>
                      <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Name</Form.Label>
                      <Form.Control placeholder="Name" required onChange={(e)=> setName(e.target.value)}  />
                     </Form.Group>
                      </Col>
                      <Col>
                      <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Contact</Form.Label>
                      <Form.Control  placeholder="Contact Number" required onChange={(e)=> setContact(e.target.value)}  />
                     </Form.Group>
                      </Col>
                    </Row>
                     

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="Address" required onChange={(e)=> setAddress(e.target.value)}  />
                     </Form.Group>
                     

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" required onChange={(e)=> setAddress2(e.target.value)}  />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Select defaultValue="ghaziabad" required onChange={(e)=> setCity(e.target.value)} > 
          <option>Choose...</option>
            <option value='Ghaziabad'>Ghaziazabd</option>
            <option value='Noida'>Noida</option>
            {/* <option>...</option> */}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." required onChange={(e)=> setState(e.target.value)} >
            <option>Choose...</option>
            <option value='UP'>Uttar Pradeh</option>
            {/* <option>...</option> */}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Select defaultValue="Choose..." required onChange={(e)=> setPostalCode(e.target.value)}>
          {/* <option>Choose...</option> */}
            <option value='201010'>201010</option>
            <option value='201019'>201019</option>
            {/* <option>...</option> */}
          </Form.Select>
        </Form.Group>
      </Row>

                        <Button type='submit'>
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

export default ShippingScreen
