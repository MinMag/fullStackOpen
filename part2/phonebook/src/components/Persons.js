import React from 'react'

const Persons = (props) => {

    const persons = props.persons
    const search = props.search

    const filt = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
        {filt.map(person => (
            <div key={person.name}>
                {person.name} {person.number} <button onClick={()=>props.removePerson(person.id)}>delete</button>
                </div>
        ))}
        </div>
     
    )
}

export default Persons