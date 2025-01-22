

import Nav from './components/Nav/Nav'
import './App.css'
import Players from './components/AvailablePlayer/Players'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App() {
  const [money,setMoney]=useState(0)

  const handleAddMoney =()=>{
    const newMoney = money+60000000
    setMoney(newMoney)
  }

  return (
    <>
      <Nav handleAddMoney={handleAddMoney} money={money}></Nav>
      <Players money={money}></Players>
      <Footer></Footer>
    </>
  )
}

export default App
