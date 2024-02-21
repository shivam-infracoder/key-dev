import React, {useState, useEffect} from 'react'
import {Figure, Col, Row} from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { listCollectionDetails } from '../actions/productActions'
import { Link } from 'react-router-dom'

// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

function Collections() {

    const [collections, setCollections] = useState([])
    useEffect(() => {
        async function fetchCollections(){
          const {data} = await axios.get('http://13.239.113.56:8000/product/collections/')
          setCollections(data)
          
          console.log(collections)
        }
    
        fetchCollections()
      },[])


  return (
    <div style={{overflow:'auto', whiteSpace:'nowrap'}}>
        <Row>
        {
                    collections.length == 0 ? "loading..."  :
                    collections.map(col => (
                      <Col  sm={4} md={4} lg={3} xs={4} style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                          {/* <h3>{product.name}</h3> */}
                          <Link to ={`/collection/${col.id}?name=${col.name}`}>
                          <Figure className='my-2'>
                                    <Figure.Image
                                        src={col.image}
                                        style={{height:'200px', width:'200px'}}

                                    />
                                    <Figure.Caption>
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

export default Collections
