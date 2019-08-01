import React from 'react'

const FilterPerson = (props) => {
    return (
        <form>
          Filter: <input value={props.newFilterPerson}
         onChange={props.handlePersonFilter}
          />
        </form>
    )
}

 export default FilterPerson