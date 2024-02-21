import React, {useState, useEffect, Profiler} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  Link,redirect,useParams, useNavigate, useLocation} from 'react-router-dom'
import {  Row, Col, Image, ListGroup, Button, Card, Form, Modal, Stack} from 'react-bootstrap'
import Rating from '../components/Rating'
import loader from '../components/loader'
import Message from '../components/Message'
import { listCollectionDetails } from '../actions/productActions'
import Product from '../components/Product'
import axios from 'axios'

function OccasionScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const match = useParams()
    const location = useLocation()
    const [products, setProducts] = useState([])
    const [filterProducts,setFilterProducts] = useState([])
    
    const colID = match.id
    const name = location.search ? (String(location.search.split('=')[1])).replace("%20",' ') : 'Not Found'

    const collectionProductList = useSelector(state => state.collectionProductList)
    const {collectionLoading, collectionError, collectionProducts} = collectionProductList
    useEffect(()=>{
        async function fetchProducts(){
            const {data} = await axios.get(`http://127.0.0.1:8000/product/occasions/${colID}`)
            setProducts(data)
            setFilterProducts(data)
            console.log(data)
          }
      
          fetchProducts()
    },[])
    // console.log('list : ', collectionProducts.length)
    // setFilterProducts()
    
    const getUniqueCatData = (data, property) =>{
        let newVal = data.map((curElem) =>{
            return curElem[property].name;
           
        })
        console.log('hee');
        console.log(newVal);
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
        <span><h1 className='my-3'>{name}</h1></span>
      </div>

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
    </div>
  )
}

export default OccasionScreen
