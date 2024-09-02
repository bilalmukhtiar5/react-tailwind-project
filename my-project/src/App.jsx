import Navbar from './components/Navbar'
import './App.css'
import Prenavbar from './components/Prenavbar'
import Home from './pages/Home'
import Carousel from './components/Carousel'
import HomeCards from './components/HomeCards'
import AboutOurHospital from './components/AboutOurHospital'



function App() {

  return (
    <>
      <Prenavbar/>
      <Navbar/>
      <Home/>
      <HomeCards/>
      <AboutOurHospital/>
    </>
  )
}

export default App
