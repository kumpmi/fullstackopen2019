import React from 'react'
import ReactDOM from 'react-dom'
/*
const Header = props =>
  <h1>{props.course}</h1>

const Total = props => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return <p>yhteensä {total} tehtävää</p>
}
*/

const Course = props => {
    console.log("Kurssit array: " , props.course)

    const partRows = () => props.course.parts.map(part =>
        <tr key={part.name}>
              <td>
                 {part.name}
              </td>
              <td>
                  {part.exercises}
              </td>
        </tr>
        
      )
   
    return (
       <div>
            <h1>{props.course.name}</h1>
       
            <content>
               <table>
                   <tbody>
                   {partRows()}
                   </tbody>
               </table>
                  
                
            </content>
        </div>
    )
   
}
  

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      },
      {
          name: 'Extra kurssi',
          exercises: 99
      }
    ]
  } 

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)