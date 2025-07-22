import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newarr = [1, 2, 3]


  return (
    <>
    
    <div className="text-2xl text-blue-500 bg-gray-100 p-4 rounded-md mb-4">
      Hello, Tailwind!
    </div>
    <Card username = "Hello bhai"/>
    <Card username =  "kyu hello bhai?"/>
    

    </>
  )
}

export default App
