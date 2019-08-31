import React from 'react'


const ListPerson = ( Persons ) => {

    console.log("t'' on propsii:", Persons)
    return (

      <tr>
        <td>
            {Persons.name}
        </td>
        <td>
            {Persons.number}
        </td>
        <td>
          <button onClick={() => { if (window.confirm('Delete ?')) Persons.handleDeletePerson(Persons.id)} }>Delete</button>
        </td>
      </tr>
    )
  }

export default ListPerson
