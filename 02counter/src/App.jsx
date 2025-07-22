import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCount] = useState(15)

  
  //let counter = 15

  const addValue = () => {
    if(counter != 20){
      setCount(counter + 1)

    }
    
    

  }

  const removeValue = () => {
    if(counter != 0){
      setCount(counter - 1)

    }
    

  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter} </h2>
      <button 
      onClick = {addValue}
      >Add counter value </button>
      <br />
      <button
      onClick={removeValue}
      >Decrease counter value</button>
      
    </>
  )
}

export default App
