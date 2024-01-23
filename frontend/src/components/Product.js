import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product({product}) {
  return (
    // <Card className='my-3 p-3 rounded ' style={{ width: '20rem' }} border="warning">
      <Card className='rounded my-2' style={{ width: '20rem' }} >
        <Link to ={`/product/${product._id}`}>
            <Card.Img src = {product.image} variant='top' className='rounded' style={{height:'12rem'}}></Card.Img>
            {/* <Card.Title as="div"><strong>{product.name}</strong></Card.Title> */}
        </Link>
        <Card.Body>
            <Card.Text as="div">
                
                <div className='my-0'>
                <Card.Title as="div"><strong>{product.name}</strong></Card.Title>
                    
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}  color={'#f8e825'} />
                </div>
            </Card.Text>
            <Card.Text as="h3">
                Rs. {product.price}

            </Card.Text>
            
            {/* <Button variant="primary">Add To Cart</Button> */}
      </Card.Body>
    </Card>
  )
}

export default Product
