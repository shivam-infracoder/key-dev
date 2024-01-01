import React from 'react'
import {Card, Row,Col} from 'react-bootstrap'

function VideoReels() {
  return (
    <Row>
       <Col sm={12} md={6} lg={4}>
        <Card className='my-3 p-3 rounded ' style={{ width: '20rem' }} border="warning">
    <video style={{height:430, width:'18'}} playsInline autoPlay muted loop >  
        <source src='images/r1.mp4'></source>    </video>
       </Card>  
       </Col>
       <Col>
       <Card className='my-3 p-3 rounded ' style={{ width: '20rem' }} border="warning">
    <video style={{height:430, width:'18'}} playsInline autoPlay muted loop> 
        <source src='images/r2.mp4'></source>    </video>
       </Card>  
       </Col>
       <Col>
       <Card className='my-3 p-3 rounded ' style={{ width: '20rem' }} border="warning">
    <video style={{height:430, width:'18'}} playsInline autoPlay muted loop> 
        <source src='images/r3.mp4'></source>    </video>
       </Card>  
       </Col>
    </Row>
    
       
  )
}

export default VideoReels
