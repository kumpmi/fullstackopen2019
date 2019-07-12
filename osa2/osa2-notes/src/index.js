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

  
const Courses = props => {


  const courseRows = props.courses.map((course, courseID) => {
    console.log(course.name)
    return (
      <tbody key={courseID}>
         <tr>
            <th>
                {course.name}
            </th>
          </tr>
          {course.parts.map((part) => { 
                return (
                  <tr key={part.id}>
                    <td>{part.name} </td>
                    <td>{part.exercises} </td>
                  </tr>
                );
              })} 
      </tbody>
    )
  })

  console.log(props)
  return (
    <table>
       {courseRows}
    </table>
  )
}
const App = () => {


      const courses = [
        {
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
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]


  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)