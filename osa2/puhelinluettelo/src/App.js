import React, { useState } from 'react'
import AddPerson from './AddPerson';
import ListPerson from './ListPerson';

import FilterPerson from './FilterPerson';


const App = () => {

  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilterPerson, setNewFilterPerson ] = useState('')

  const handlePersonFilter = (filterEvent) => {
  
     setNewFilterPerson(filterEvent.target.value)
  }

  const filterItems = (filteredPersons, newFilterPerson) => {
    let filtered = filteredPersons.filter(fp => fp.name.toLowerCase().indexOf(newFilterPerson.toLowerCase()) !== -1)
    console.log(filtered)
    return filtered.map(f =>
      <ListPerson
        key={f.name}
        name={f.name}
        number={f.number}
      />
      )
  };
  
 
  const personFilter = filterItems(persons, newFilterPerson)

  
  
  

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }



  const addPerson = (event) => {
    event.preventDefault()
    var error = 0;

    persons.forEach(element => {
      console.log(element.name)
      if (element.name === newName) {
        error += 1
        setNewName('')
        return alert(`${newName} is already added to phonebook` )  ;
      }
    
    });
    if (error === 0) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  
  }

  
  return (
    <div>
      <div>
        <FilterPerson handlePersonFilter={handlePersonFilter} />
      </div>
      <div>
        <AddPerson 
          addPerson={addPerson} 
          handleNameChange={handleNameChange} 
          handleNumberChange={handleNumberChange}
          persons={persons} 
          newName={newName}
           newNumber={newNumber}  
           />
      </div>
      
      <div>
        <table>
          <thead>
            <tr>
              <th>
                Nimi
              </th>
              <th>
                Numero
              </th>
            </tr>
          </thead>
        <tbody>
           {filterItems(persons, newFilterPerson)}
        </tbody>
        </table>
      
       
       </div>
    </div>

   
  )

}

export default App