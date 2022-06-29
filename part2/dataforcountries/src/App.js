import { useState, useEffect } from 'react'

import axios from 'axios'

const SearchBar = (props) => {
  return (
    <div>
      find countries <input value={props.search} onChange={props.handle} />
    </div>
  )
}

const Results = (props) => {
  const filterList = props.countries.filter(country => country.name.common.toLowerCase().includes(props.search.toLowerCase()))


  if(filterList.length > 10){
    return(
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if(filterList.length > 1) {
    return(
      filterList.map(country => (
        <div key={country.ccn3}>
          {country.name.common}
          
        </div>
      ))
        
      
    )
  } else if(filterList.length === 1) {
    const country = filterList[0]
    console.log(country.languages)
    

    return(
      <div>
      <h1>{country.name.common}</h1>

      <p>capital {country.capital} <br></br>
      area {country.area}
      </p>

      <h3>languages: </h3>

      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        )
        )}
      </ul>
      <img src={country.flags.png} height='200vh'/>
      </div>
    )
  } else {
    return (
      <div>
        no matches
      </div>
    )
  }
}






const App = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
         setCountries(response.data) 
      })
  })
  const [search, setSearch] = useState('')

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }



  return (
    <div>
      <SearchBar search={search} handle={handleSearchChange} />

      <Results countries={countries} search={search} />
    </div>
  )
}

export default App