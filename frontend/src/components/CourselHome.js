import React from 'react'
import { Carousel } from 'react-bootstrap'

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
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    {/* <Carousel.Item>
     
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item> */}
  </Carousel>
  )
}

export default CourselHome
