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
      </tr>
    )
  }

export default ListPerson
