import './App.css'
import { HashRouter } from 'react-router-dom'
import Links from './routes/Links'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css' // ✅ Import AOS styles
import { useEffect } from 'react' // ✅ Import useEffect

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
    <HashRouter>
      <Navbar/>
      <Links/>
      <Footer/>
     </HashRouter>
    </>
  )
}

export default App
