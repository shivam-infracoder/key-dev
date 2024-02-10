import React, {useState, useEffect} from 'react'
// import products from '../products'

import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
// import axios from 'axios'
import CourselHome from '../components/CourselHome'
import Product from '../components/Product'
import loader from '../components/loader'
import Message from '../components/Message'

import VideoReels from '../components/VideoReels'
import { listProduct } from '../actions/productActions'

function HomeScreen() {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList
  useEffect(()=>{
    dispatch(listProduct())
  
    
  },[dispatch])
// const products = []
  // const
  return (
    <div>
      <CourselHome/>
      <br></br>
      <div class="strike">
   <span><h1 className='my-3'>Reels</h1></span>
</div>
         <VideoReels />
        {/* <h1 className='mb-4 mt-2'>Latest</h1> */}
       
        <div class="strike">
   <span><h1 className='my-3'>Latest</h1></span>
</div>
{loading ?<loader />: error? <Message variant='danger'>{error}</Message>:
         <Row>

            {products.map(product => (
                <Col key={product._id}  sm={6} md={6} lg={3}>
                    {/* <h3>{product.name}</h3> */}
                    <Product product={product} />
                </Col>
            ))}
         </Row>

            }
    </div>
  )
}

export default HomeScreen
