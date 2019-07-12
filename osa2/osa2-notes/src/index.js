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
   
    const partRows = () => props.course.parts.map(part =>
        <tr key={part.id}>
              <td>
                 {part.name}
              </td>
              <td>
                  {part.exercises}
              </td>
        </tr>
      )

      let exercisesArr = props.course.parts;
      console.log(exercisesArr)
      let totalExercies = () => exercisesArr.reduce(function(sum, exercise) {
          return  sum + exercise.exercises
      }, 0)
      console.log(totalExercies)
   
    return (
       <div>
            <h1>{props.course.name}</h1>
       
            <content>
               <table>
                   <tbody>
                       {partRows()}
                       <tr>
                         <td>
                           Total exercises: 
                         </td>
                         <td>
                         {totalExercies()} 
                         </td>
                       </tr>
                   
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
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
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