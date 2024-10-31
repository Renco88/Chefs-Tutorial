import { useState } from 'react'
import './App.css'
import Navber from './Components/Navber/Navber'
import Banner from './Components/Banner/Banner'
import Recipes from './Components/Recipes/Recipes'

function App() {
  

  return (
    <>
      
      <Navber></Navber>
      <Banner></Banner>
      <div>
      <Recipes></Recipes>
      </div>
      
      
    </>
  )
}

export default App
