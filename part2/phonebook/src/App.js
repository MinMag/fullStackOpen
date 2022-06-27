import { useState } from 'react'
import SearchBar from './components/SearchBar'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567'},
    { name: 'Ada Lovelace', number: '39-22-2390231'},
    { name: 'John Smith', number: '1-300-13902'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')


  const handleNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if(JSON.stringify(persons).includes(JSON.stringify(newPerson.name))) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
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
      <SearchBar search={search} handle={handleSearchChange} />

      <h2>add a new contact</h2>

      <PersonForm action={handleNewPerson} name={newName} handleName={handleNameChange} number={newNumber} handleNumber={handleNumberChange} />

      
      <h2>Numbers</h2>
      

      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App