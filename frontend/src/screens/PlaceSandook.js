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

  return (
    <Row>
                <Col md={4}>
          <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Booking Confirmed </h2>
                  
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                        <Col>
                        Address
                        </Col>
                        <Col>
                        {(localStorage.getItem('address1'))}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        City
                        </Col>
                        <Col>
                        {(localStorage.getItem('city'))}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        State
                        </Col>
                        <Col>
                        {(localStorage.getItem('state'))}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        Postal
                        </Col>
                        <Col>
                        {(localStorage.getItem('postal'))}
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
              </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <h1>Confirm Your Sandook</h1>
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

    </Row>
  )
}

export default PlaceSandook