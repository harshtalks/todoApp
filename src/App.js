import { useState } from 'react';
import './App.css';
import AddNewRevenge from './Components/AddNewRevenge';
import Grudges from './Components/Grudges';
import  DummyData  from './Components/Dummy';

function App() {

  const [grudges, setGrudges] = useState(DummyData)

  const addGrudge = (grudge) => {
    grudge.id = Math.floor(Math.random()*10000)
    grudges.isForgiven = false
    setGrudges([grudge, ...grudges])
  }

  const toggleForgive = (id) => {
    setGrudges(grudges.map(el => {
      if(id!== el.id) return el
      return {...el, isForgiven: !el.isForgiven}
    }))
  }
  
  return (
    <div className="container">
      <h1>Best Revenge App</h1>
      <AddNewRevenge addCriminal = {addGrudge}/>
      <Grudges data = {grudges} toggleForgiveness = {toggleForgive}/>
    </div>
  )
}

export default App;
