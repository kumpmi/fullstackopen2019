import React, { useState, useEffect } from 'react'
import AddPerson from './AddPerson';
import ListPerson from './ListPerson';
import FilterPerson from './FilterPerson';
import personService from './services/Persons';
import Notification from './Notification'
import './index.css'

const App = () => {

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilterPerson, setNewFilterPerson ] = useState('')
  const [ message, setNewMessage] = useState([])

  const handlePersonFilter = (filterEvent) => {
     setNewFilterPerson(filterEvent.target.value)
  }

  const filterItems = (filteredPersons, newFilterPerson) => {
    let filtered = filteredPersons.filter(fp => fp.name.toLowerCase().indexOf(newFilterPerson.toLowerCase()) !== -1)
    console.log(filtered)

    return filtered.map(f =>
      <ListPerson
        key={f.name}
        id={f.id}
        name={f.name}
        number={f.number}
        handleDeletePerson={handleDeletePerson}
      />
      )
  };
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleDeletePerson = (id) => {

    personService
    .deletePerson(id)
    .then(response => {

      const messageObject = {
        type: 'success',
        string: `Deleted ${id}`
      }
      console.log(messageObject)
        setNewMessage(messageObject) 
        setTimeout(() => {
          setNewMessage(null)
        }, 5000)
     
    })
    .catch(error => {

      const messageObject = {
        type: 'error',
        string: ` ${id} is already deleted`
      }
      console.log(messageObject)
        setNewMessage(messageObject) 

        setTimeout(() => {
          setNewMessage(null)
        }, 5000)
     

    })
    .finally(function () {
      console.log('excuted')
      personService
      .getAll()
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
    });
   

  }

  const addPerson = (event) => {
    event.preventDefault()
    var error = 0;

    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.forEach(element => {
      console.log(element.name)
      if (element.name === newName) {
        if (window.confirm('Do you want to update number?')){
          personService
          .update(element.id,personObject)
          .catch(error => {
            const  messageType = 'error'
            const messageString = `${newName} is not updated to phonebook`
              createMessage(messageType,messageString)
          })
          .then(response => {
           const  messageType = 'success'
           const messageString = `${newName} is updated to phonebook`
             createMessage(messageType,messageString)
          })
          .finally(function () {
            console.log('excuted')
            personService
            .getAll()
            .then(response => {
              console.log(response.data)
              setPersons(response.data)
            })
          });
        }
          error += 1
          setNewName('')

      }
    
    });
    if (error === 0) {

      personService
      .create(personObject)
      .catch(error => {
        const messageType = 'error'
        const messageString = `${newName} is NOT added to phonebook`
         createMessage(messageType,messageString)
       }
      )
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
       
       const messageType = 'success'
       const messageString = `${newName} is added to phonebook`
        createMessage(messageType,messageString)
        
      })
 
    }

   const createMessage = (type, string) => {
    const messageObject = {
      type: type,
      string: string
    }
    console.log(messageObject)
      setNewMessage(messageObject) 

      setTimeout(() => {
        setNewMessage(null)
      }, 5000)
   
   }
  
  }

  return (
    <div>
      <div>
        <FilterPerson handlePersonFilter={handlePersonFilter} />
      </div>
      <div>
      <Notification message={message} />
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