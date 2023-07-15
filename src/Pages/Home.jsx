import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Card from "../Components/Card/Card"
import Footer from "../Components/Footer/Footer"
import Carasoule from '../Components/Carasoul/Carasoule'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Card/>
        <Carasoule/>
        <Footer/>
    </div>
  )
}

export default Home