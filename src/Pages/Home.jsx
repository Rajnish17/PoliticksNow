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
  
import image3 from "../Components/assets/Frame 52429.png"
import image4 from "../Components/assets/Frame 52430.png"
import image5 from "../Components/assets/Frame 52431.png"
import image6 from "../Components/assets/Frame 52432.png"
const Home = () => {

  let data =[{
    img:image3,
   
  },
              {
                img:image4
              },
              {
                img:image5
              },
              {
                img:image6
              },
]

  return (
    <div>
        <Navbar/>
        <Banner />
        <Card data={data}/>
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