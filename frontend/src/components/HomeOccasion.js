import React, {useState, useEffect, Profiler} from 'react'
import { Card, Button, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

function HomeOccasion() {

    const [products, setProducts] = useState([])
  const [filterProducts,setFilterProducts] = useState([])
  const [stiched,setStiched] = useState()


  useEffect(() => {
    async function fetchProducts(){
      const {data} = await axios.get('http://127.0.0.1:8000/product/list')
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
    console.log(newVal);
    return newVal = [...new Set(newVal)]
    console.log('hee');
   
  }


  const categorydata= getUniqueCatData(products,'occasion')
  return (
    
    <Row>
    {
                categorydata.map((curElem, index)=>{
                    return (
                                <Col  md={6} xs={12} style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                                    <Card className='rounded my-2' bg='dark' text='white' style={{ width: '16rem' }} >
                               
                <Card.Body>
     
        <Card.Text as="h5" style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
           {curElem}
        </Card.Text>
        
        {/* <Button variant="primary">Add To Cart</Button> */}
  </Card.Body>
</Card>
</Col>
                )
})
}
        {/* <Card.Img src = {product.image} variant='top' className='rounded' style={{height:'10rem'}}></Card.Img> */}
        {/* <Card.Title as="div"><strong>{product.name}</strong></Card.Title> */}
    </Row>
 
  )
}

export default HomeOccasion
