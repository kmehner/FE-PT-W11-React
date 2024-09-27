import React from 'react'
import styles from '../Greeting.module.css'

// Functional 
function Greeting(){
  // Variables and functions go here (above return)

  // Inline CSS (A javascript object containing CSS properties)
  const greetingStyle = {
    color: 'green',
    fontSize: '18px'
  }

  // Whatever we want to show up on the page 
  return (
    <>
      <div className={styles.greeting}>Greeting</div>
      <div style={greetingStyle}>Greeting</div>
    </>
  )
}

export default Greeting


// command to make function: rafce 