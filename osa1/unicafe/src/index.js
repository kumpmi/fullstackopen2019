import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
 
  if (props.rate === 0 || props.rate === "NaN") 
  {
    return (
      <tr>
        <td>
          Ei tilastoja
        </td>
      </tr>
    )
  }
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.rate}
      </td>
  </tr>
  )


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

  let sum = 0;
  let avarage = 0;
  let positive = 0;

   sum = good + neutral + bad;
   avarage = (good - bad) / sum;
   positive = good / sum ;

   const avarageString = avarage.toString();
   const positiveString = positive.toString();
   
  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={() => setToGood(good + 1)} text="Hyvä" />
      <Button onClick={() => setToNeutral(neutral + 1)} text="Neutraali" />
      <Button onClick={() => setToBad(bad + 1)} text="Huono" />
      <h1> Stastiikka </h1>
      <table>
        <tbody>
          
          <Statistics text={"Hyvä"} rate={good} />
          <Statistics text={"Neutraali"} rate={neutral} />
          <Statistics text={"Huono"} rate={bad} />
          <Statistics text={"Keskiarvo"} rate={avarageString} />
          <Statistics text={"Postitive"} rate={positiveString} />
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)