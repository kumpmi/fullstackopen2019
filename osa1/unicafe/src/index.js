import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
 console.log("props");

 const sum = props.good + props.neutral + props.bad;
 const avarage = ((props.good - props.bad) / sum);
 const positive = props.good / sum;
 if (sum > 0) {
  return (
    <div>
      <h1>Statistiikka</h1>
        <table>
          <tbody>
            <tr>
              <td>Hyvä</td><td>{props.good}</td>
            </tr>
            <tr>
              <td>Neutraali</td><td>{props.neutral}</td>
            </tr>
            <tr>
              <td>Huono:</td><td>{props.bad}</td>
            </tr>
            <tr>
              <td>Ynteensä</td><td>{sum}</td>
            </tr>
            <tr>
              <td>Keksiarvo</td><td>{avarage}</td>
            </tr>
            <tr>
              <td>Postiivinen palaute %</td><td>{positive}</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
 }
 else {
   console.log("summa on on nolla")
   return (
     <div>
       <h1>Ei tilastoja</h1>
      </div>
   )
 } 
 
}

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
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)