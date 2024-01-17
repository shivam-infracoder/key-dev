import React, {useEffect, useState} from 'react'
import {  Link,useParams } from 'react-router-dom'
import {  Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
// import products from '../products'


function ProductScreen() {
    const [product, setProduct] = useState([])
    const match = useParams()
    useEffect(()=>{
  
      async function fetchProduct(){
        const {data} = await axios.get(`http://127.0.0.1:8000/product/${match.id}`)
        setProduct(data)
      }
  
      fetchProduct()
      
      
      
    },[])
    
    // console.log(product.variants[0].color)
    const varin = product.variants
    console.log(varin)
    const countInStock=0
   
  
    // const match = useParams()
    // const product = products.find((p) => p._id == match.id)
  return (
    <div>
     <Link to='/' className='btn btn-light my-3'> Go Back</Link>
     <Row>
        <Col md={4}>
            <Image src={varin?varin[0].image : 'loading..'} alt={product.name}  fluid height={'auto'} rounded / >
        </Col>
        <Col md={5}>
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
                    Category: {product.category}
                </ListGroup.Item>
                <ListGroup.Item>
                    Washing: {product.washing}
                </ListGroup.Item>
                <ListGroup.Item>
                    Top: {product.top_fabric} / {product.top_length}
                </ListGroup.Item>
                <ListGroup.Item>
                Bottom: {product.bottom_fabric} / {product.bottom_length}
                </ListGroup.Item>
                <ListGroup.Item>
                Dupatta: {product.dupata_fabric} / {product.dupata_length}
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

                            <strong>{countInStock> 0 ? 'In Stock' : 'Out of Stock'}</strong></Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                        <Button className='btn-block' type='button' disabled={countInStock== 0} > Add to Sandook</Button></Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
     </Row>
     <Row>
        <Col>
            <h5 className='my-3'>Colors</h5>
        </Col>
     </Row>
     <Row>
       

            {varin ? varin.map(item => (
                 <Col md={2}>
             
           
            {/* <Card.Text > */}
           <i style={{color:item.color} } className='fas fa-circle'></i>
           {/* <i className={
               'fas fa-star'  }> </i> */}

            {/* </Card.Text> */}
            
            {/* <Button variant="primary">Add To Cart</Button> */}
      {/* </Card.Body> */}
    {/* </Card> */}
                        </Col>
            )):'loading'}
           
         </Row>
    </div>
  )
}

export default ProductScreen
