// import React from 'react'
import React, {useState, useEffect} from 'react'
// import products from '../products'

import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../actions/productActions'
import { Button, InputGroup , Nav, Row, Stack} from 'react-bootstrap'

function Filters() {

    const dispatch = useDispatch()
    const [filterProducts,setFilterProducts] = useState([])
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList
    useEffect(()=>{
        dispatch(listProduct())
  
    
  },[dispatch])

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
  const washingFilter = getUniqueData(products,'washing')
  const topFabricFilter = getUniqueData(products,'top_fabric')
  const bottomFabricFilter = getUniqueData(products,'bottom_fabric')
  const dupataFabricFilter = getUniqueData(products,'dupata_fabric')
  const occasionFilter = getUniqueData(products,'occasion')
//   categorydata
  const categoryHandler = (cat) =>{
    alert(cat)
    if(cat == 'All'){
        console.log(products)
    }
    else{
        console.log(products.filter(product => product.category.name === cat))
    }
    


  }
  return (
    <div>
      <div className='filter-category'>
      
                {/* <Nav.Link eventKey="link-1">Link</Nav.Link> */}
               
                <Stack >
                
                    <div className="p-2">
                    <h6>Category</h6>
                    {
                        categorydata.map((curElem, index)=>{
                            return <Button 
                                        key={index}
                                        type="button"
                                        value={curElem}
                                        onClick={(e)=>categoryHandler(e.target.value)}
                                        variant=''
                                        size='sm'
                                    >   
                                        {curElem}
                                    </Button>
                    })
            }
                    </div>
                
               
                </Stack>
                <Stack >
                
                <div className="p-2">
                    
                <h6>Ocassion</h6>
                <> 
                {
                    occasionFilter.map((curElem, index)=>{
                        return <Button 
                                    key={index}
                                    type="button"
                                    value={curElem}
                                    onClick={(e)=>categoryHandler(e.target.value)}
                                    variant=''
                                    size='sm'
                                    
                                >   
                                 {curElem}
                                </Button>
                     })
                }
                </>
                </div>
            </Stack>
                <Stack >
                
                <div className="p-2">
                <h6>Top </h6>
                {
                    topFabricFilter.map((curElem, index)=>{
                        return <Button 
                                    key={index}
                                    type="button"
                                    value={curElem}
                                    onClick={(e)=>categoryHandler(e.target.value)}
                                    variant=''
                                    size='sm'
                                >   
                                 {curElem}
                                </Button>
                     })
                }
                </div>
            </Stack>
            <Stack >
                <div className="p-2">
                <h6>Bottom </h6>
                {
                    bottomFabricFilter.map((curElem, index)=>{
                        return <Button 
                                    key={index}
                                    type="button"
                                    value={curElem}
                                    onClick={(e)=>categoryHandler(e.target.value)}
                                    variant=''
                                    size='sm'
                                >   
                                 {curElem}
                                </Button>
                     })
                }
                </div>
            </Stack>
            <Stack >
                
                <div className="p-2">
                <h6>Dupatta </h6>
                {
                    dupataFabricFilter.map((curElem, index)=>{
                        return <Button 
                                    key={index}
                                    type="button"
                                    value={curElem}
                                    onClick={(e)=>categoryHandler(e.target.value)}
                                    variant=''
                                    size='sm'
                                >   
                                 {curElem}
                                </Button>
                     })
                }
                </div>
            </Stack>       
      </div>
    </div>
  )
}

export default Filters              
