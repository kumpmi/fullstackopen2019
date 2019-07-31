import React from 'react';


const AddPerson = (props) => {

    return (
       <div>
           <h2>Phonebook</h2>
      <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName}
         onChange={props.handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    )
}

export default AddPerson