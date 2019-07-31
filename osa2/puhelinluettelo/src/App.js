import React, { useState } from 'react'
import AddPerson from './AddPerson';
import ListPerson from './ListPerson';

import FilterPerson from './FilterPerson';


const App = () => {

  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    persons.map(function(p) {
      console.log('vanha',p.name , 'uusi' , newName)

        if(p.name === newName){
            return alert(`${newName} is already added to phonebook` )      
        }
        else {
          const personObject = {
            name: newName,
          }
          setPersons(persons.concat(personObject))
          setNewName('')
        }

        return true

         });

   
  }

  
  return (
    <div>
      <div>
        <FilterPerson />
      </div>
      <div>
        <AddPerson addPerson={addPerson} handleNameChange={handleNameChange} persons={persons} newName={newName}  />
      </div>
      
      <div>
        <ListPerson persons={persons} />
       </div>
    </div>

   
  )

}

export default App