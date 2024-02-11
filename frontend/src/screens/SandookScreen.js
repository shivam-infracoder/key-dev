import React, {useState, useEffect, Profiler} from 'react'
// import products from '../products'

import { useDispatch, useSelector } from 'react-redux'
import { Row, Col,Nav, Form, Button, NavDropdown, Stack } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
// import axios from 'axios'
import CourselHome from '../components/CourselHome'
import Product from '../components/Product'
import loader from '../components/loader'
import Message from '../components/Message'
import Sidebar from '../components/Sidebar'
import Filters from '../components/Filters'

import VideoReels from '../components/VideoReels'
import { listProduct } from '../actions/productActions'
import {  Link,redirect,useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

function SandookScreen() {
  const match = useParams()
  const [products, setProducts] = useState([])
  const [filterProducts,setFilterProducts] = useState([])
  const [stiched,setStiched] = useState()


  useEffect(() => {
    async function fetchProducts(){
      const {data} = await axios.get('http://13.239.113.56:8000/product/list')
      setProducts(data)
      setFilterProducts(data)
      console.log(data)
    }

    fetchProducts()
  },[])
// const products = []
  // const
  const getUniqueCatData = (data, property) =>{
    let newVal = data.map((curElem) =>{
        return curElem[property].name;
       
    })
    return newVal = ["All",...new Set(newVal)]
    console.log('hee');
    console.log(newVal);
  }
  const getUniqueData = (data, property) =>{
    let newVal = data.map((curElem) =>{
        return curElem[property];
       
    })
    return newVal = ["All",...new Set(newVal)]
    console.log(property);
    console.log(newVal);
  }
  const categorydata= getUniqueCatData(products,'category')
  const washingFilter = getUniqueCatData(products,'washing')
  const topFabricFilter = getUniqueData(products,'top_fabric')
  const bottomFabricFilter = getUniqueData(products,'bottom_fabric')
  const dupataFabricFilter = getUniqueData(products,'dupata_fabric')
  const occasionFilter = getUniqueCatData(products,'occasion')
  const patternFilter = getUniqueCatData(products,'pattern')

//   categorydata
  const categoryHandler = (cat) =>{
    
    if(cat == 'All'){
        // console.log(products)
        setFilterProducts(products)
    }
    else{
       setFilterProducts(products)
        setFilterProducts(products.filter(product => product.category.name === cat))
  
    }
  }
  // occasion 
  const occasionHandler = (cat) =>{
    // alert(cat)
    if(cat == 'All'){
        // console.log(products)
        setFilterProducts(products)
    }
    else{
       setFilterProducts(products)
        setFilterProducts(products.filter(product => product.occasion.name === cat))
        

    }
    


  }

  // top 
  const topHandler = (cat) =>{
    // alert(cat)
    if(cat == 'All'){
        console.log(products)
        setFilterProducts(products)
    }
    else{
       setFilterProducts(products)
        setFilterProducts(products.filter(product => product.top_fabric === cat))
    }
  }

 // top 
 const bottomHandler = (cat) =>{
  // alert(cat)
  if(cat == 'All'){
      console.log(products)
      setFilterProducts(products)
  }
  else{
     setFilterProducts(products)
      setFilterProducts(products.filter(product => product.bottom_fabric === cat))
  }
}

 // dupata
 const dupataHandler = (cat) =>{
  // alert(cat)
  if(cat == 'All'){
      console.log(products)
      setFilterProducts(products)
  }
  else{
     setFilterProducts(products)
      setFilterProducts(products.filter(product => product.dupata_fabric === cat))
  }
}

//washing 
const washingHandler = (cat) =>{
  // alert(cat)
  if(cat == 'All'){
      console.log(products)
      setFilterProducts(products)
  }
  else{
     setFilterProducts(products)
      setFilterProducts(products.filter(product => product.washing.name === cat))
  }
}

//washing 
const patternHandler = (cat) =>{
  // alert(cat)
  if(cat == 'All'){
      console.log(products)
      setFilterProducts(products)
  }
  else{
     setFilterProducts(products)
      setFilterProducts(products.filter(product => product.pattern.name === cat))
  }
}
  const stichedHandler = (cat) =>{
    // console.log(products)
    setFilterProducts(products)
    setFilterProducts(products.filter(product => product.category.name === cat))
    // setProducts(products)
  }

  const unstichedHandler = (cat) =>{
    setFilterProducts(products)
    setFilterProducts(products.filter(product => product.category.name === cat))
    // setProducts(filterProducts)
  }

  const priceHandler = (cat) =>{
    // alert(cat==1)
    setFilterProducts(products)
    if(cat == 1){
      
      setFilterProducts(products.filter(product => Number(product.price) < Number(1000)))
    }
    if(cat == 2){
      setFilterProducts(products.filter(product => (Number(product.price) > Number(1000) && (Number(product.price) < Number(2000)))))
    }
    
    if(cat == 3){
      setFilterProducts(products.filter(product => Number(product.price) > Number(2001)))
    }


    
    // setProducts(filterProducts)
  }

  

  const searchHandler = (cat) =>{
    // alert(cat)
      setFilterProducts(products)
      setFilterProducts(products.filter(product => product.description.includes(cat)))
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClear = () =>{
    setShow(false)
    setFilterProducts(products)

  }
  return (
    <div>
           <Button size='sm' variant="success" className='filter-float' onClick={handleShow}>
        <i className='fas fa-filter fa-lg'></i>
      </Button>   
         
      
      <div class="strike">
        <span><h1 className='my-3'>Book Your Sandook</h1></span>
      </div>
         {/* <VideoReels /> */}
        {/* <h1 className='mb-4 mt-2'>Latest</h1> */}
        {/* <Button className='filter-float'> text</Button> */}

        <Modal show={show} onHide={handleClose}  size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Row>
          <Col>
          <div className="p-2">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
              size={30}
                type='text'
                name='text'
                placeholder='SEARCH'
                // value={text}
                onChange={(e)=>searchHandler(e.target.value)}
              ></input>
              </form>    
          
                  {/* <h6>Ocassion</h6> */}
          </div></Col>
        </Row>
        <Row>
          <Col>
          <Stack >

            <div className="p-2">
            <h6>Category</h6>
            {
                categorydata.map((curElem, index)=>{
                    return (<Row><Button 
                                key={index}
                                type="button"
                                value={curElem}
                                onClick={(e)=>categoryHandler(e.target.value)}
                                variant=''
                                size='sm'
                            >   
                    {curElem}
                </Button></Row>)
})
}
</div>


          </Stack>
          <Stack >
            <div className="p-2">
            <h6>Bottom </h6>
            {
                bottomFabricFilter.map((curElem, index)=>{
                    return (<Row><Button 
                                key={index}
                                type="button"
                                value={curElem}
                                onClick={(e)=>bottomHandler(e.target.value)}
                                variant=''
                                size='sm'
                            >   
                             {curElem}
                            </Button> </Row>)
                 })
            }
            </div>
        </Stack>
        
     
   
          </Col>
          <Col>
          <Stack >

            <div className="p-2">
            <h6>Prize</h6>
            
               <Row>
                <Button 
                  type="button"
                  onClick={(e)=>priceHandler(e.target.value)}
                  variant=''
                  value='1'
                  size='sm'
                > less than 1000</Button> 
              </Row>
              <Row>
                <Button 
                  type="button"
                  onClick={(e)=>priceHandler(e.target.value)}
                  variant=''
                  value='2'
                  size='sm'
                > 1001-2000</Button> 
              </Row>
              <Row>
                <Button 
                  type="button"
                  onClick={(e)=>priceHandler(e.target.value)}
                  variant=''
                  value='3'
                  size='sm'
                > more than 2000</Button> 
              </Row>
            
            
            
            </div>


          </Stack>
       
        <Stack >
            
            <div className="p-2">
            <h6>Top </h6>
            {
                topFabricFilter.map((curElem, index)=>{
                    return (<Row><Button 
                                key={index}
                                type="button"
                                value={curElem}
                                onClick={(e)=>topHandler(e.target.value)}
                                variant=''
                                size='sm'
                            >   
                             {curElem}
                            </Button> </Row>)
                 })
            }
            </div>
        </Stack>
    
          </Col>
          <Col>
          <Stack >
            
            <div className="p-2">
            <h6>Washing </h6>
              {
                  washingFilter.map((curElem, index)=>{
                      return (<Row><Button 
                                  key={index}
                                  type="button"
                                  value={curElem}
                                  onClick={(e)=>washingHandler(e.target.value)}
                                  variant=''
                                  size='sm'
                              >   
                              {curElem}
                              </Button> </Row>)
                  })
              }
            </div>
            </Stack>       
            <Stack >
            
            <div className="p-2">
            <h6>Dupatta </h6>
            {
                dupataFabricFilter.map((curElem, index)=>{
                    return (<Row><Button 
                                key={index}
                                type="button"
                                value={curElem}
                                onClick={(e)=>dupataHandler(e.target.value)}
                                variant=''
                                size='sm'
                            >   
                             {curElem}
                            </Button></Row>)
                 })
            }
            </div>
        </Stack>       

 
          </Col>

          <Col>
        {/* occasion */}
        <Stack >
            
            <div className="p-2">
                
            <h6>Ocassion</h6>
            <> 
            {
                occasionFilter.map((curElem, index)=>{
                    return (<Row><Button 
                                key={index}
                                type="button"
                                value={curElem}
                                onClick={(e)=>occasionHandler(e.target.value)}
                                variant=''
                                size='sm'
                                
                                
                            >   
                             {curElem}
                            </Button></Row>)
                 })
            }
            </>
            </div>
        </Stack>
        <Stack >

<div className="p-2">
<h6>Pattern</h6>
{
    patternFilter.map((curElem, index)=>{
        return (<Row><Button 
                    key={index}
                    type="button"
                    value={curElem}
                    onClick={(e)=>patternHandler(e.target.value)}
                    variant=''
                    size='sm'
                >   
                    {curElem}
                </Button> </Row>)
})
}
</div>


</Stack>

          </Col>
        </Row>

            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClear}>
            Clear
          </Button>
        </Modal.Footer>
      </Modal>
    
        <Row>
          
   
                <Row>
                  {
                    filterProducts.length == 0 ? "No Product"  :
                    filterProducts.map(product => (
                      <Col key={product._id} sm={6} md={6} lg={3}>
                          {/* <h3>{product.name}</h3> */}
                          <Product product={product} />
                      </Col>
                  ))
                  }

                       
            </Row>

          

            
         </Row>
         

             {/* } */}
    </div>
  )
}

export default SandookScreen
