import { useState, useEffect } from 'react'

import SearchBar from './components/SearchBar'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonService from './services/contacts'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='notif'> 
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  
  useEffect(() => {
    PersonService.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('message')


  const handleNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if(JSON.stringify(persons).includes(JSON.stringify(newPerson.name))) {
      alert(`${newName} is already added to phonebook`)
    } else {
      PersonService.create(newPerson)
      .then((response) => {
      setMessage(`Added ${response.data.name}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
}
     )
          }


  }

  const removePerson = (id) => {
    const person = persons.find(p => p.id === id)

    if(window.confirm(`Delete ${person.name}?`)) {
      PersonService.remove(id)
      .then(response => {
        setPersons(persons.filter(p => p.id !== id))
      })

    }
  }

  const handleNameChange = (event) => {

    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message}/>
      <SearchBar search={search} handle={handleSearchChange} />

      <h2>add a new contact</h2>

      <PersonForm action={handleNewPerson} name={newName} handleName={handleNameChange} number={newNumber} handleNumber={handleNumberChange} />

      
      <h2>Numbers</h2>
      

      <Persons persons={persons} search={search} removePerson={removePerson} />
    </div>
  )
}

export default App