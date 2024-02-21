import React, {useState, useEffect} from 'react'
import {Figure, Col, Row} from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { listCollectionDetails } from '../actions/productActions'
import { Link } from 'react-router-dom'

// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

function HomeOccasion() {

    const [occasions, setOccasions] = useState([])
    useEffect(() => {
        async function fetchOccasions(){
          const {data} = await axios.get('http://13.239.113.56:8000/product/occasions/')
          setOccasions(data)
          
          // console.log(collections)
        }
    
        fetchOccasions()
      },[])


  return (
    <div style={{overflow:'auto', whiteSpace:'nowrap'}}>
        <Row>
        {
                    occasions.length == 0 ? "loading..."  :
                    occasions.map(col => (
                      <Col  sm={4} md={4} lg={4} xs={4} style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                          {/* <h3>{product.name}</h3> */}
                          <Link to ={`/occasion/${col.id}?name=${col.name}`}>
                          <Figure className='my-2'>
                                    <Figure.Image
                                        src={col.image}
                                        style={{height:'200px', width:'200px'}}

                                    />
                                    <Figure.Caption style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                                        {col.name}
                                    </Figure.Caption>
                                </Figure>
                                </Link>
                      </Col>
                  ))
                  }
     

        
        </Row>
        
    </div>
  )
}

export default HomeOccasion
