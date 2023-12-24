import React from 'react'
import products from '../products'


import { Row, Col } from 'react-bootstrap'
import CourselHome from '../components/CourselHome'
import Product from '../components/Product'

function HomeScreen() {
  return (
    <div>
      <CourselHome/>
        <h1 className='my-3'>Latest</h1>
    
         <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4}>
                    {/* <h3>{product.name}</h3> */}
                    <Product product={product} />
                </Col>
            ))}
         </Row>
    </div>
  )
}

export default HomeScreen
