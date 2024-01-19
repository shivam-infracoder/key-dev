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
import {  Link,redirect,useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

function CategoryScreen() {
  const match = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchProducts(){
      const {data} = await axios.get('http://3.106.170.226:8000/product/category/2')
      setProducts(data)
    }

    fetchProducts()
  },[])
// const products = []
  // const
  return (
    <div>
      
      
      <div class="strike">
   <span><h1 className='my-3'>Unstiched</h1></span>
</div>
         {/* <VideoReels /> */}
        {/* <h1 className='mb-4 mt-2'>Latest</h1> */}
       
      
{/* {loading ?<loader />: error? <Message variant='danger'>{error}</Message>: */}
         <Row>

            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4}>
                    {/* <h3>{product.name}</h3> */}
                    <Product product={product} />
                </Col>
            ))}
         </Row>

             {/* } */}
    </div>
  )
}

export default CategoryScreen
