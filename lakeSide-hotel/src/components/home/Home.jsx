import React from 'react'
import MainHeader from '../layout/MainHeader'
import HotelService from '../common/HotelService'
import Parallax from '../common/Parallax'
import RoomCarousel from '../common/RoomCarousel'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location =useLocation()
  const  message=location.state && location.state.message
  const currentUser=localStorage.getItem("useId")
  return (
    <section>
      {message &&<p className='text-warning px5'>{message}</p>}
      {currentUser &&( <h6 className='text-succcess text-center'> you are logged-In as {currentUser}</h6>)}
      <MainHeader/>
      <section className='container'>
       <RoomCarousel/>
      <Parallax/>
       <HotelService/>
   





      </section>
    </section>
  )
}

export default Home
