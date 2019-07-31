import React from 'react'

const ListPerson = (props) => {
    const personList = props.persons.map((person) => {
      
        return (
            <tbody key={person.name}>
            <tr >
                <td>{person.name}</td>
            </tr>
            </tbody>
        )
       
    })

    return (
        <div>
            <h2>Numbers</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            Nimi:
                        </th>
                        <th>
                            Numero
                        </th>
                    </tr>
                </thead>
                {personList}
            </table>
        </div>
    )
}

export default ListPerson
