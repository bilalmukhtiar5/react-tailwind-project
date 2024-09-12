import Navbar from './components/Navbar'
import './App.css'
import Prenavbar from './components/Prenavbar'
import HomeCards from './components/HomeCards'
import AboutOurHospital from './components/AboutOurHospital'

import Carousel from './components/Carousel'
import GoogleBusiness from './components/googleBusiness'
import OurTeam from './components/OurTeam'
import BackgroundSection from './components/BackgroundSection'
import HealthDataCards from './components/HealthDataCards'
import InspiringStories from './components/InspiringStories'
import StoriesSlider from './components/StoriesSlider'
import Footer from './components/Footer'

import ServicesSlider from './components/ServicesSlider'

function App() {

  return (
    <>
      <Prenavbar/>
      <Navbar/>
      <Carousel/>
      <HomeCards/>
      <AboutOurHospital/>
      <ServicesSlider/>
      <GoogleBusiness/>
      <OurTeam/>
      <BackgroundSection/>
      <HealthDataCards/>
      <InspiringStories/>
      <StoriesSlider/>
      <Footer/>
      
      
      
      
    </>
  )
}

export default App
