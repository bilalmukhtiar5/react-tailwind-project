import Navbar from './components/Navbar'
import './App.css'
import Prenavbar from './components/Prenavbar'
import Home from './pages/Home'
import Carousel from './components/Carousel'
import HomeCards from './components/HomeCards'
import AboutOurHospital from './components/AboutOurHospital'
import Services from './components/ServicesSlider'



function App() {

  return (
    <>
      <Prenavbar/>
      <Navbar/>
      <Home/>
      <HomeCards/>
      <AboutOurHospital/>
      <Services/>
    </>
  )
}

export default App
