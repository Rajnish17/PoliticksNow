import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Card from "../Components/Card/Card"
import Footer from "../Components/Footer/Footer"
import Carasoule from '../Components/Carasoul/Carasoule'
import Carasoul2 from '../Components/carasoul2/Carasoul2'
import Carasoul3 from '../Components/carasoul3/Carasoul3'
import Carasoul4 from '../Components/carasoul4/Carasoul4'
import Carasoul5 from '../Components/carasoul5/Carasoul5'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Card/>
        <Carasoule/>
        <Carasoul2/>
        <Carasoul3/>
        <Carasoul4/>
        <Carasoul5/>
        <Footer/>
    </div>
  )
}

export default Home