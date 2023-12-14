import React from 'react'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
const Home = () => {
  return (
    <div style={{backgroundColor:"aquamarine",marginTop:"-15px"}}>
        <SearchForm/>
        <CocktailList/>
    </div>
  )
}

export default Home