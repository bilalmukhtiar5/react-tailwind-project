import Navbar from './components/Navbar'
import './App.css'
import Prenavbar from './components/Prenavbar'
import HomeCards from './components/HomeCards'
import AboutOurHospital from './components/AboutOurHospital'
import Services from './components/ServicesSlider'
import Carousel from './components/Carousel'



function App() {

  return (
    <>
      <Prenavbar/>
      <Navbar/>
      <Carousel/>
      <HomeCards/>
      <AboutOurHospital/>
      <Services/>
    </>
  )
}

export default App
