import React from 'react';
import ReactDOM from 'react-dom';

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
      }
    ]
  }

   const coursename = course.name

    const partsmap = course.parts.map((part) => 
      <li key={part['name']}> {part['name']} {part['exercises']} </li>,
 
    );
    console.log({partsmap})

    let sum = 0;
    course.parts.map((item) =>
        sum += item['exercises']
      
    )
   console.log(sum)
    

    

   return (
        <div>
         <h1>{course.name}</h1>
        <ul>
         {partsmap}
        </ul>
        <div>
            yhteensä: {sum}
        </div>
            
      </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
