import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Catalogue from '../pages/Catalogue'

import SingleProduct from '../pages/SingleProduct'

const Links = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/ourcatalogue' element={<Catalogue/>}/>

        {/* Single Page */}
        <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
      
    </>
  )
}

export default Links
