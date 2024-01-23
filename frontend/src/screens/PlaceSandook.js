import React, {useEffect} from 'react'

import { useDispatch, useSelector, UseSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import {  addToCart, removeFromCart } from '../actions/cartActions'
import {  Link,useParams, useNavigate, useLocation, useSearchParams} from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'


function PlaceSandook() {

  const navigate = useNavigate()
  const match = useParams()
  const location = useLocation()

  const productID = match.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  // console.log(qty)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
  console.log(cartItems)
  useEffect(()=>{
    if(productID){
      dispatch(addToCart(productID,qty))
    }
  },[dispatch,productID,qty])

  const removeFromcartHandler = (id) =>{
    // console.log('remove : ', id)
    dispatch(removeFromCart(id))
  }

  const checkOutHandler = () => {
    // navigate('/shipping/')
    alert('Yipeeee')
  }
  const bookSandook = (e) =>{
    e.preventDefault()
    alert('Sandook Confrimed !')
    localStorage.clear('cartItems')
    navigate('/')


}

  return (
    <Row>
                <Col md={4}>
          <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Booking Details </h2>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={1}><i className='fas fa-user'></i></Col>
                    <Col md={5}>{localStorage.getItem('name').slice(1,-1)}</Col>
                  </Row>
                  <Row>
                  <Col md={1}><i className='fas fa-phone'></i></Col>
                    <Col>{localStorage.getItem('contact').slice(1,-1)}</Col>
                  </Row>
                  </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col md={1}>
                        <i class='fas fa-address-card'></i>
                        </Col>
                        <Col>
                        {(localStorage.getItem('address1')).slice(1,-1)} , {(localStorage.getItem('address2')).slice(1,-1)} 
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1}>
                        {/* City */}
                        </Col>
                        <Col >
                        {(localStorage.getItem('city')).slice(1,-1)}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1}>
                        {/* State */}
                        </Col>
                        <Col>
                        {(localStorage.getItem('state')).slice(1,-1)} - {(localStorage.getItem('postal')).slice(1,-1)}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1}>
                        {/* Postal */}
                        </Col>
                        <Col >
                        
                        </Col>
                    </Row>
                  

                  {/* <Button
                    type='button'
                    className='btn-block'
                    disabled={cartItems.length === 0}
                    onClick={checkOutHandler}
                  >
                      Proceed To Checkout
                  </Button> */}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={1}><i class='fas fa-calendar-alt'></i></Col>
                    <Col>{localStorage.getItem('date').slice(1,-1)}</Col>
                  </Row>
                  <Row>
                  <Col md={1}><i class='fas fa-clock'></i></Col>
                    <Col>{localStorage.getItem('time').slice(1,-1)}</Col>
                  </Row>
                  </ListGroup.Item>
              </ListGroup>
          </Card>
          <Button type='submit' onClick={bookSandook} className='my-3'>
                            Book Now 
                        </Button>
        </Col>
        <Col md={6}>
          <h1>Confirm Your Sandook  <i class='fas fa-box-open'></i></h1>
          {cartItems.length === 0 ?
              <Message variant='info'>
                  Sandook is empty <Link to ='/'> Shop Now</Link>
              </Message>:
              (
                <ListGroup variant=''>
                    {cartItems.map(item =>(
                      <ListGroup.Item key={item.product}>
                        <Row>
                          <Col md={2}>
                            <Image src={item.image} fluid rounded/>

                          </Col>
                          <Col md={3}>
                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                          </Col>
                          <Col md={2}>
                            Rs. {item.price}
                          </Col>
                          <Col xs='auto'>
                          <Form.Control disabled
                                            as = 'select'
                                            value={item.qty}
                                            onChange={(e)=> dispatch(addToCart(item.product,Number(e.target.value)))}
                                            
                                        >
                                            {
                                                [...Array(item.count_in_stock).keys()].map((x)=>(
                                                    <option value={x+1} key={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                            }

                                        </Form.Control>
                          </Col>
                         
                        </Row>

                      </ListGroup.Item>
                    ))}
                </ListGroup>
              )
        }
        </Col>
        <Col>
 
        </Col>

    </Row>


  )
}

export default PlaceSandook
