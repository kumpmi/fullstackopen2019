import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newGood) => {
      setGood(newGood)
  }
  const setToNeutral = (newNeutral) => {
    setNeutral(newNeutral)
  }
  const setToBad = (newBad) => {
    setBad(newBad)
  }
  const sum = good + bad + neutral;
  
  const avarage = ((good - bad)/sum);
  const positive = good / sum ;
  


  return (
    <div>
      <h1>Give feedback</h1>
        <button onClick={() => setToGood(good => good + 1)} value="1">
        Hyvä
      </button>
      <button onClick={() => setToNeutral(neutral => neutral + 1)} value="0">
        neutraali
      </button>
      <button onClick={() => setToBad(bad => bad + 1) } value="-1">
        Huono
      </button>
      <div>
        <h1>Statistiikka</h1>
         hyvä: {good} <br/>
         neutraali: {neutral} <br/>
         bad: {bad} <br/>
         Yhteensä: {sum} <br/>
         Keskiarvo: {avarage} <br/>
         Positiivinen: {positive}

     
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)