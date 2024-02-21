import React, {useState, useEffect} from 'react'
// import products from '../products'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Card, ListGroup ,Image, Carousel, Figure} from 'react-bootstrap'
// import axios from 'axios'
import CourselHome from '../components/CourselHome'
import Product from '../components/Product'
import loader from '../components/loader'
import Message from '../components/Message'

import VideoReels from '../components/VideoReels'
import { listFProduct, listProduct } from '../actions/productActions'
import axios from 'axios'
import HomeOccasion from '../components/HomeOccasion'
import Collections from '../components/Collections'

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
         <span><h3 className='my-1'>Holi Special</h3></span>
         </div>
        
    
         </Row>
         <Row>
         
         <Carousel className='pm-0'>
           <Carousel.Item interval={1500}>
              <img 
                      className="d-block w-100"
          src="b3.jpeg"
                      alt="Image One"
                      
                    /> 
          <Carousel.Caption>
              <Button>Shop Now</Button>
          </Carousel.Caption>
 
    </Carousel.Item>
    </Carousel>
         </Row>
         
   
        </div>
      
        <div style={{justifyContent:'center'}}>
         <Row>
         <div class="strike">
         <span><h3 className='my-3'>Collections</h3></span>
         </div>
         </Row>
        
        
          <Row>
              <Collections />
          </Row>
        </div>

        <div style={{justifyContent:'center'}}>
         <Row>
         <div class="strike">
         <span><h3 className='my-1'>Special Collection</h3></span>
         </div>
        
    
         </Row>
         <Row>
         
         <Carousel className='pm-0'>
           <Carousel.Item interval={1500}>
              <img 
                      className="d-block w-100"
                      src="b2.jpeg"
                      alt="Image One"
                    /> 
          <Carousel.Caption>
              {/* <Button>Shop Now</Button> */}
          </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={1500}>
              <img 
                      className="d-block w-100"
                      src="b1.jpeg"
                      alt="Image One"
                    /> 
          <Carousel.Caption>
              {/* <Button>Shop Now</Button> */}
          </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
         </Row>
         
   
        </div>
      

       
        <div class="strike">
   <span><h3 className='my-3'>By Occasion</h3></span>
</div>
{loading ?<loader />: error? <Message variant='danger'>{error}</Message>:
         <Row>

       <HomeOccasion />
         </Row>

            }
      

        <div style={{justifyContent:'center'}}>
         <Row>
         <div class="strike">
         <span><h3 className='my-3'>By Category</h3></span>
         </div>
         </Row>
        
        
          <Row>

<Col style={{justifyContent:'center', alignItems:'center', display:'flex'}}>

    <Link to='/category/stiched'>
    <Figure className='my-2'>
                                    <Figure.Image
                                        src="st.jpeg"
                                        style={{height:'200px', width:'200px'}}

                                    />
                                    <Figure.Caption>
                                        Stiched
                                    </Figure.Caption>
                                </Figure>
     </Link>
</Col>

<Col style={{justifyContent:'center', alignItems:'center', display:'flex'}}>

<Link to='/category/unstiched'>
<Figure className='my-2'>
                                    <Figure.Image
                                        src="un.jpeg"
                                        style={{height:'200px', width:'200px'}}

                                    />
                                    <Figure.Caption>
                                        Unstiched
                                    </Figure.Caption>
                                </Figure>
     </Link>
    
     
</Col>
          </Row> 
           
        </div>

    </div>
    
  )
}

export default HomeScreen
