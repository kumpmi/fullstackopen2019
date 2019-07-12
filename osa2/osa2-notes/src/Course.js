import React from 'react'

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
            <tr>
                <td>
                  Total exercises: 
                </td>
                <td>
                    {course.parts.reduce(function(sum, exercise)  {
                      return sum + exercise.exercises
                    }, 0)}
               </td>
            </tr>
        </tbody>
      )
    })
    return (
      <table>
         {courseRows}
      </table>
    )
  }
  console.log("test")
  export default Courses