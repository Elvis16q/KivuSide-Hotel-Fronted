import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import { FaClock, FaParking, FaSnowflake, FaTshirt, FaUtensils, FaWifi } from 'react-icons/fa'

const HotelService = () => {
  return (
    <>
      <Container className='mb-2'>
        <Header title={"our services"}/>

         <Row>
         <h4 className='text-center'>    
         Services at<span className='hotel-color'>Kivu-Side </span>Hotel
         <span className='gap-2'>  
         
         <FaClock/> -24-Hour Front Desk</span>
         </h4>
         </Row>
         <hr/>
     <Row xs={1} md={2} lg={3} className='g-4 mt-2'>
       <Col>
       <Card>
        <Card.Body>
          <Card.Title className='hotel-color'>
          <FaWifi/> Wifi
          </Card.Title>
          <Card.Text> Stay connected with high speed internet Access</Card.Text>
         
            </Card.Body>
            </Card>
        </Col> 

        <Col>
       <Card>
        <Card.Body>
          <Card.Title className='hotel-color'>
          <FaUtensils/> Breakfast
          </Card.Title>
          <Card.Text> Start your day with a delicious breakfast buffet</Card.Text>
        
            </Card.Body>
            </Card>
        </Col>   


        <Col>
       <Card>
        <Card.Body>
          <Card.Title className='hotel-color'>
          <FaTshirt/> Laundry
          </Card.Title>
          <Card.Text> Keep your clothes clean and fresh with our laundry service </Card.Text>
         
            </Card.Body>
            </Card>
        </Col> 


        <Col>
       <Card>
        <Card.Body>
          <Card.Title className='hotel-color'>
          <FaParking/> parking
          </Card.Title>
          <Card.Text> park your car in our on-site parking lot</Card.Text>
          
            </Card.Body>
            </Card>
        </Col> 

        <Col>
       <Card>
        <Card.Body>
          <Card.Title className='hotel-color'>
          <FaSnowflake/> Air condition
          </Card.Title>
          <Card.Text> Stay cool and confortable with our air conditioning system</Card.Text>
          
            </Card.Body>
            </Card>
        </Col> 
     </Row>
 </Container>
<hr/>


    </>
  )
}

export default HotelService
