import React from 'react'


const CountryList = ( Countries ) => {
  console.log(Countries)
 
  if (Countries.size === 1) {
    return (
          <div>
            <div>
            <h2>{Countries.name}</h2> 
            </div>
            <div>
            Capital:  {Countries.capital}
            </div>
            <div>
            Population: {Countries.population}
            </div>
            <div>
              <h3>Languages</h3>
              <ul>
                {Countries.languages.map(lang =>
                  <li key={lang.nativeName}>{lang.name}</li>
                  )}
              </ul>
          </div>
            <div>
            <img width="100px" src={Countries.flag} alt="Lippu" />
          </div>
        </div>

        )
  }
  else {
    return (
      <div>
         {Countries.name}  <button onClick={() => Countries.showMore(Countries.name)} value={Countries.name}>Show</button>
      </div>
    )
  }
  

  }

export default CountryList
