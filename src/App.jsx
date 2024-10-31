import { useState } from 'react'
import './App.css'
import Navber from './Components/Navber/Navber'
import Banner from './Components/Banner/Banner'
import Recipes from './Components/Recipes/Recipes'
import WantToCooks from './Components/WantToCooks/WantToCooks'
import Recipe from './Components/Recipe/Recipe'
import Ourrecipe from './Components/Ourrecipe/Ourrecipe'

function App() {
  const [wantToCooks,setWantToCooks]=useState([]);

  const handleAssToWantToCooks = recipe => {
    const newWantToCooks =[...wantToCooks,recipe];
    setWantToCooks(newWantToCooks);
  }
  

  return (
    <>
      
      <Navber></Navber>
      <Banner></Banner>
      <Ourrecipe></Ourrecipe>
      <div className='flex gap-5 '>
      <Recipes handleAssToWantToCooks={handleAssToWantToCooks}></Recipes>
      
    <WantToCooks wantToCooks={wantToCooks}></WantToCooks>
      </div>
      
      
    </>
  )
}

export default App
