import Navbar from './components/Navbar'
import './App.css'
import Prenavbar from './components/Prenavbar'
import HomeCards from './components/HomeCards'
import AboutOurHospital from './components/AboutOurHospital'
import Services from './components/ServicesSlider'
import Carousel from './components/Carousel'
import GoogleBusiness from './components/googleBusiness'
import OurTeam from './components/OurTeam'
import BackgroundSection from './components/BackgroundSection'

import HealthDataCards from './components/HealthDataCards'
import InspiringStories from './components/InspiringStories'
import StoriesSlider from './components/StoriesSlider'

function App() {

  return (
    <>
      <Prenavbar/>
      <Navbar/>
      <Carousel/>
      <HomeCards/>
      <AboutOurHospital/>
      <Services/>
      <GoogleBusiness/>
      <OurTeam/>
      <BackgroundSection/>
      <HealthDataCards/>
      <InspiringStories/>
      <StoriesSlider/>
      
      
      
      
    </>
  )
}

export default App
