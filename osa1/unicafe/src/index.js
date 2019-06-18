import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newGood) => {
    console.log("test") 
    setGood(newGood)
  }
  const setToNeutral = (newNeutral) => {
    setNeutral(newNeutral)
  }
  const setToBad = (newBad) => {
    setBad(newBad)
  }


  return (
    <div>
      <h1>Give feedback</h1>
        <button onClick={() => setToGood(good => good + 1)} value="1">
        Hyvä
      </button>
      <button onClick={() => setToNeutral(neutral => neutral + 1)} value="1">
        neutraali
      </button>
      <button onClick={() => setToBad(bad => bad + 1) } value="1">
        Huono
      </button>
      <div>
        <h1>Statistiikka</h1>
         hyvä: {good} <br/>
         neutraali: {neutral} <br/>
         bad: {bad} <br/>

     
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)