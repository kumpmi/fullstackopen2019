import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    
    const course = 'Half Stack -sovelluskehitys'
    const parts = [
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

    const partsmap = parts.map((part) => 
   <li> {part['name']} {part['exercises']} </li> 
    );
    //const total = parts.map((parts))
             
    const Total =  parts['0']['exercises'] + parts['1']['exercises'] + parts['2']['exercises']
       
    

    return (
        <div>
        <h1>{course}</h1>
        <ul>
            {partsmap}     
        </ul>
        <div>
          Yhteensä: {Total}
        </div>
            
      </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
