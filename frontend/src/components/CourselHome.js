import React from 'react'
import { Carousel, Button } from 'react-bootstrap'

function CourselHome() {
  return (
    <Carousel className='pm-0'>
    <Carousel.Item interval={1500}>
    <img 
            className="d-block w-100"
src="/images/f1.jpeg"
            alt="Image One"
            
          /> 
          <Carousel.Caption>
              <Button>Shop Now</Button>
          </Carousel.Caption>
 
    </Carousel.Item>
     <Carousel.Item>
       <img 
            className="d-block w-100"
src="b4.jpeg"
            alt="Image One"
            
          /> 
      <Carousel.Caption className='y-2'>
       
      
      </Carousel.Caption>
    </Carousel.Item> 
  </Carousel>
  )
}

export default CourselHome
