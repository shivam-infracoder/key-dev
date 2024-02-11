import React, {useEffect} from 'react'

import { useDispatch, useSelector, UseSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import {  addToCart, removeFromCart } from '../actions/cartActions'
import {  Link,useParams, useNavigate, useLocation, useSearchParams} from 'react-router-dom'


function CartScreen() {

  const navigate = useNavigate()
  const match = useParams()
  const location = useLocation()
  var totalPrice=null

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
    localStorage.setItem('finalPrice',cartItems.reduce((acc, item) => acc + item.qty * item.price,0).toFixed(2))
    // alert()
    navigate('/shipping/')
  }

  return (
    <>
    <Row>
        <Col md={8}>
          <h1>My Sandook</h1>
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
                          <Form.Control
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
                          <Col md={1}>
                            <Button type="button" variant='light' onClick={() => removeFromcartHandler(item.product)}>
                                        <i className='fas fa-trash' ></i>
                            </Button>
                          </Col>
                        </Row>

                      </ListGroup.Item>
                    ))}
                </ListGroup>
              )
        }


       
        </Col>
        <Col md={4}>
          <Card className='shadow-lg'>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty,0)}) Items </h2>
                  Rs. {cartItems.reduce((acc, item) => acc + item.qty * item.price,0).toFixed(2)}
                  
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block'
                    disabled={cartItems.length === 0}
                    onClick={checkOutHandler}
                  >
                      Proceed To Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
          </Card>
        </Col>
    </Row>

    </>
  )
}

export default CartScreen
