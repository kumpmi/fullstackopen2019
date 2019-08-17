import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './CountryList';
import CountryFilter from './CountryFilter';


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
  const [ show, setShow] = useState(false)

  const handleCountryFilter = (filterEvent) => {
    console.log("Test", filterEvent.target.value)
    setNewCountries(filterEvent.target.value)
 }



  const filterCountries = (countries, newCountries) => {
    let filtered = countries.filter(country => country.name.toLowerCase().indexOf(newCountries.toLowerCase()) !== -1)
    console.log(filtered)
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

  return (
<div>
  <h1>
    Hello World
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
