import React from 'react'


const CountryFilter = ( props ) => {

  return (
    <form>
    Filter: <input value={props.setNewCountries}
   onChange={props.handleCountryFilter}
    />
  </form>
     )

  }

export default CountryFilter
