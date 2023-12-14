import React from 'react'
import { useGlobalContext } from '../context'
const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <div style={{backgroundColor:"white",marginTop:"40px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"}}>
            <p>Search Your Favourite Cocktail!</p>
            <input type="text" style={{width:"300px"}} onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
    </div>
  )
}

export default SearchForm
