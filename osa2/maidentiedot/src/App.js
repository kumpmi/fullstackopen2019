import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './CountryList';
import CountryFilter from './CountryFilter';
import { template } from '@babel/core';


function App() {

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const [ countries, setCountries] = useState([]) 
  const [ newCountries, setNewCountries] = useState('')
  const [ weather, setWeather] = useState([])


  const handleCountryFilter = (filterEvent) => {
    console.log("Test", filterEvent.target.value.charAt(0).toUpperCase() + filterEvent.target.value.slice(1))
    setNewCountries(filterEvent.target.value.charAt(0).toUpperCase() + filterEvent.target.value.slice(1))
 }

  const filterCountries = (countries, newCountries) => {
    let filtered = countries.filter(country => country.name.toLowerCase().indexOf(newCountries.toLowerCase()) !== -1)

    if (filtered.length === 1) {
 
    return filtered.map(c =>
        <CountryList
          key={c.name} 
          name={c.name}
          capital={c.capital}
          population={c.population}
          languages={c.languages}
          flag={c.flag}
          size={filtered.length}

          getWeather={getWeather}
        />
      
      )      
    }
    if (filtered.length <= 10) {
      return filtered.map(c =>
        <CountryList
          key={c.name}
          name={c.name}
          size={filtered.length}
          showMore={showMore}
          filterCountries = {filterCountries}
        />
        )  
    }
    else {
      return (
        <p> Liian monta </p>
      )
    }
  };


  const showMore = (value) => {
    setNewCountries(value)
  }

  const getWeather = (capital) => {
 
    let baseUrl = `http://api.apixu.com/v1/current.json?key=967be3f8c7fa4e2993574853191708&q=`
    let query = capital
    let urlandquery = baseUrl + query

    axios.get(urlandquery)
    .then(res => {
      const weatherData = []
      for (let [key, value] of Object.entries(res.data.current)) {
        weatherData[key] = value
      }
      for (let [key, value] of Object.entries(weatherData.condition)) {
        weatherData[key] = value
      } 
      setWeather(weatherData)
    }) 
     
    return (
      <div>
        <div>
          Tempeture {weather.temp_c} celsius
        </div>
        <div>
            <img width="100px" src={weather.icon} alt="icon" />
        </div>
        <div>
          Wind {weather.wind_kph} kph wind direction {weather.wind_dir}
        </div>
      </div>
    )
 
  }

  return (
<div>
  <h1>
    Type country and check details
  </h1>
  <div>
    <CountryFilter handleCountryFilter={handleCountryFilter} />
  </div>
  <div>
   {filterCountries(countries, newCountries)} 
  </div>
  <div>

  </div>
  

</div>
  );
}

export default App;
