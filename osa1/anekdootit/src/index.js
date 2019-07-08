import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)
const Vote = props => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Highestvote = (props) => {
  var HighestvoteKey = props.value.indexOf(Math.max(...props.value))
    return (
      <div>
        <h1>Eniten ääniä saanut anekdootti</h1>
       {props.anecdotes[HighestvoteKey]}
      </div>
    )
}

const App = (props) => {

//Initalisoidaan pisteet
const kojoPoints = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);

  var [selected, setSelected] = useState(0)
  var [points, setPoints] = useState(kojoPoints)
  const key = props.anecdotes.indexOf(props.anecdotes[selected])


  function selectRandom() {

    const rndNumber = Math.floor(Math.random() * 5);
     setSelected(selected => rndNumber)

  }
 
  function addVote(index) {

    let copy = [] 
    copy = [...points]
    copy[index] += 1
    setPoints(copy)

  }

  console.log("pisteet:" ,points)

  return (
    <div>
      <div>
         {props.anecdotes[selected]}
      </div>
        <div>
        Votes:
        </div>
     <div>
       <Button onClick={selectRandom} value="{props.anecdotes[selected]}" text="Next anecdote" /> 
     
       <Vote onClick={ () => addVote(key)} text="vote" />
      </div> 
      <Highestvote value={points} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
 
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root'),
)
