import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './utils/Card'
import CardGrid from './components/CardGrid'




function App() {
  

  return (
    <div>
      <Navbar/>
      <div style={{background : "transparent",  height: "74px"}}></div>
      <CardGrid/>
      
    </div>
    
  )
}

export default App
