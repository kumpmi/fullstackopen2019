import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14

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
                   {part1} {exercises1}
                </p>
                <p>
                   {part2} {exercises2}
                </p>
                <p>
                   {part3} {exercises3}
                </p>
           </div>
        )
    }
    const Total = (props) => {
        return (
            <div>
                <p>
                    Yhteensä : {exercises1 + exercises2 + exercises3}
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

