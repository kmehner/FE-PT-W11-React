import { useState } from 'react'
import Greeting from './components/Greeting'
import ClassGreeting from './components/ClassGreeting'
// import './App.css'

function App() {
  // Section where you declare variables and functions 
  const [count, setCount] = useState(0)

  // function to get data from the api 

  // log in the user 

  
  // This is what you want to display on the webpage 
  return (
    <>
      <p>Hello world</p>
      {/* Two ways to write component tags */}
      <Greeting></Greeting>
      <Greeting />

      <h3>This is a class greeting</h3>
      <ClassGreeting/>

    </>
  )
}

export default App
