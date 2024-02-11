import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  Link,redirect,useParams, useNavigate} from 'react-router-dom'
import {  Row, Col, Image, ListGroup, Button, Card, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import loader from '../components/loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions'

// import axios from 'axios'
// import products from '../products'


function ProductScreen() {
    // const [product, setProduct] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [qty,setQty]= useState(1)
    const match = useParams()
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails
    useEffect(()=>{
            dispatch(listProductDetails(match.id))

    },[])
    console.log('list : ', product)
    // console.log(product.variants[0].color)
    // const varin = product.variants
    // console.log(varin)
    // const countInStock=0
    const addToCartHandler = () =>{
        // console.log('add to cart : ', match.id   )
        navigate(`/cart/${match.id}?qty=${qty}`)
    }
  
    // const match = useParams()
    // const product = products.find((p) => p._id == match.id)
  return (
    <div>
     <Link to='/' className='btn btn-light my-3'> Go Back</Link>

     { loading ? 
        <loader />
        : error 
           ? <Message variant='danger'>{error}</Message>
           : (
            <Row>
            <Col md={3}>
                <Image src={product.image} alt={product.name}  fluid height={'auto'} rounded / >
            </Col>
            <Col md={6}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
    
                    <ListGroup.Item>
                       <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}  />
                    </ListGroup.Item>
    
                    <ListGroup.Item>
                        Price: Rs. {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Category: { product.category ? product.category.name : 'Loading...'}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Washing: {product.washing ? product.washing.name : 'Loading...'}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Pattern: {product.pattern ? product.pattern.name : 'Loading...'}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Top: {product.top_fabric} / {product.top_length} meter
                    </ListGroup.Item>
                    <ListGroup.Item>
                    Bottom: {product.bottom_fabric} / {product.bottom_length} meter
                    </ListGroup.Item>
                    <ListGroup.Item>
                    Dupatta: {product.dupata_fabric} / {product.dupata_length} meter
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price</Col>
                                <Col><strong>{product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>
    
                        <ListGroup.Item>
                            <Row>
                                <Col>Status</Col>
                                <Col>
    
                                <strong>{product.count_in_stock> 0 ? 'In Stock' : 'Out of Stock'}</strong></Col>
                            </Row>
                        </ListGroup.Item>

                        {product.count_in_stock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Qty
                                    </Col>
                                    <Col xs='auto' className='' >
                                        <Form.Control
                                            as = 'select'
                                            value={qty}
                                            onChange={(e)=> setQty(e.target.value)}
                                            
                                        >
                                            {
                                                [...Array(product.count_in_stock).keys()].map((x)=>(
                                                    <option value={x+1} key={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                            }

                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                        )}
    
                        <ListGroup.Item>
                            <Row>
                            <Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.count_in_stock == 0} > Add to Sandook</Button></Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
         </Row>
    


           )
     
    }
    
    </div>
  )
}

export default ProductScreen
