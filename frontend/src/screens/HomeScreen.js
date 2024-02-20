import React, {useState, useEffect} from 'react'
// import products from '../products'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Card, ListGroup } from 'react-bootstrap'
// import axios from 'axios'
import CourselHome from '../components/CourselHome'
import Product from '../components/Product'
import loader from '../components/loader'
import Message from '../components/Message'

import VideoReels from '../components/VideoReels'
import { listFProduct, listProduct } from '../actions/productActions'
import axios from 'axios'
import HomeOccasion from '../components/HomeOccasion'

function HomeScreen() {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
    // const [featuredProducts, setfeaturedProducts] = useState([])
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  const fProductList = useSelector(state => state.fProductList)
  const {ferror, floading, fproducts} = fProductList
  useEffect(()=>{
    
    
    dispatch(listProduct())
    dispatch(listFProduct())
    console.log(fproducts)
    
  },[dispatch])
// const products = []
  // const

  // const match = useParams()


  return (
    <div>
      <CourselHome/>
      <br></br>
      {/* <div class="strike">
   <span><h1 className='my-3'>Reels</h1></span>
</div>
         <VideoReels /> */}

        <div style={{justifyContent:'center'}}>
         <Row>
         <div class="strike">
         <span><h3 className='my-1'>Feature Products</h3></span>
         </div>
        
    
         </Row>
         <Row>
          <Col md={5}></Col>
          <Col md={2} xs={12} style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
         
          <Button size='sm' variant='outline-dark'>View All</Button>
          
          </Col>
         </Row>
         <Row>

{fproducts.map(p => (
    <Col style={{justifyContent:'center', alignItems:'center', display:'flex'}} key={p._id}  sm={6} md={6} lg={3}>
        {/* <h3>{product.name}</h3> */}
        <Product product={p.product} />
    </Col>
))}

          </Row> 
        
   
        </div>
        <div style={{justifyContent:'center'}}>
         <Row>
         <div class="strike">
         <span><h3 className='my-3'>Kaan Print </h3></span>
         </div>
         </Row>
         <Row  >
          <Col md={5}></Col>
          <Col md={2} xs={12} style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
         
          <Button size='sm' variant='outline-dark'>View All</Button>
          
          </Col>
         </Row>
        
          <Row >

{products.slice(0,4).map(product => (
    <Col key={product._id}  sm={6} md={6} lg={3}>
        {/* <h3>{product.name}</h3> */}
        <Product product={product} />
    </Col>
))}

          </Row> 
           
        </div>
        <div style={{justifyContent:'center'}}>
         <Row>
         <div class="strike">
         <span><h3 className='my-3'>Kashmira Collections</h3></span>
         </div>
         </Row>
         <Row>
          <Col md={5}></Col>
          <Col md={2} xs={12} style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
         
          <Button size='sm' variant='outline-dark'>View All</Button>
          
          </Col>
         </Row>
        
          <Row>

{products.slice(0,4).map(product => (
    <Col key={product._id}  sm={6} md={6} lg={3}>
        {/* <h3>{product.name}</h3> */}
        <Product product={product} />
    </Col>
))}

          </Row> 
           
        </div>
        <div style={{justifyContent:'center'}}>
         <Row>
         <div class="strike">
         <span><h3 className='my-3'>By Collection</h3></span>
         </div>
         </Row>
        
        
          <Row>

<Col style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
<Card className='rounded my-2 bg-dark text-white' style={{ width: '16rem' , height: '19rem' }} >
    <Link to='/category/stiched'>
     <Card.Img src='st.jpeg'/>
     </Link>
     <>
        <Card.Body>
            <Card.Text as="div">
                
                <div className='my-0'>
                <Card.Title as="div" style={{justifyContent:'center', alignItems:'center', display:'flex'}}><h6>STICHED</h6></Card.Title>
                    
                    {/* <Rating value={product.rating} text={`${product.numReviews} reviews`}  color={'#f8e825'} /> */}
                </div>
            </Card.Text>
      
            
            {/* <Button variant="primary">Add To Cart</Button> */}
      </Card.Body>
      </>
    </Card>
</Col>

<Col style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
<Card className='rounded my-2 bg-dark text-white' style={{ width: '16rem', height: '19rem' }} >
<Link to='/category/unstiched'>
     <Card.Img src='un.jpeg' / >
     </Link>
     <>
        <Card.Body>
            <Card.Text as="div">
                
                <div className='my-0'>
                <Card.Title as="div" style={{justifyContent:'center', alignItems:'center', display:'flex'}}><h6>Un-STICHED</h6></Card.Title>
                    
                    {/* <Rating value={product.rating} text={`${product.numReviews} reviews`}  color={'#f8e825'} /> */}
                </div>
            </Card.Text>
      
            
            {/* <Button variant="primary">Add To Cart</Button> */}
      </Card.Body>
      </>
    </Card>
</Col>
          </Row> 
           
        </div>
       
        <div class="strike">
   <span><h3 className='my-3'>Occasion</h3></span>
</div>
{loading ?<loader />: error? <Message variant='danger'>{error}</Message>:
         <Row>

       <HomeOccasion />
         </Row>

            }
    </div>
  )
}

export default HomeScreen
