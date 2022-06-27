import React from 'react'


const SearchBar = (props) => {

    return(
        <div>
            filter shown with <input value={props.search} onChange={props.handle}/>
        </div>
        
    )
}


export default SearchBar