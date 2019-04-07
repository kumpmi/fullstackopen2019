import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = {
        name: 'Reactin perusteet',
        exercises: 10
      }
      const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      }
      const part3 = {
        name: 'Komponenttien tila',
        exercises: 14
      }


    const Header = (props) => {
        return (
            <h1>
                {course}
            </h1>
        )
    }
    const Content = (props) => {
    
        return (
           <div>
                <p>
                   {part1['name']} {part1['exercises']}
                </p>
                <p>
                     {part2['name']} {part2['exercises']}
                </p>
                <p>
                    {part3['name']} {part3['exercises']}
                </p>
           </div>
        )
    }

    const Total = (props) => {
        return (
            <div>
                <p>
                    Yhteensä : {part1['exercises'] + part2['exercises'] + part3['exercises']}
                </p>
            </div>
        )
    }

    return (
        <div>
        <Header  />
        <Content  />
        <Total  />
      </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
