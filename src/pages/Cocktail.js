import React from 'react'
import { useGlobalContext } from '../context'
import { useParams } from 'react-router-dom';
const Cocktail = () => {
    const {state} = useGlobalContext();
    const obj = useParams();
    const index = obj.id;
  return (
    <div style={{backgroundColor:"aquamarine",height:"90vh",marginTop:"-30px"}}>
      {/* <button style={{marginLeft:"47%",marginTop:"50px"}}>Back Home</button> */}
      <p style={{textAlign:"center",fontSize:"35px",fontWeight:"bold",paddingTop:"30px"}}>{state[index].strDrink}</p>
      <div style={{display:"flex"}}>
        <img src={state[index].strDrinkThumb} alt="" style={{height:"400px",marginLeft:"100px"}}/>
        <div style={{fontWeight:"bold",marginLeft:"40px",fontSize:"22px"}}>
          <div style={{marginBottom:'20px'}}>
            <span style={{backgroundColor:"#06d6a0"}}>Name: </span><span>{state[index].strDrink}</span>
          </div>
          <div style={{marginBottom:'20px'}}>
            <span style={{backgroundColor:"#06d6a0"}}>Category: </span><span>{state[index].strCategory}</span><br/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <span style={{backgroundColor:"#06d6a0"}}>Info: </span><span>{state[index].strAlcoholic}</span><br/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <span style={{backgroundColor:"#06d6a0"}}>Glass: </span><span>{state[index].strGlass}</span><br/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <span style={{backgroundColor:"#06d6a0"}}>Ingredients: </span><span>{state[index].strIngredient1} {state[index].strIngredient2} {state[index].strIngredient3} {state[index].strIngredient4}</span><br/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <span style={{backgroundColor:"#06d6a0"}}>Instructions: </span><span>{state[index].strInstructions}</span><br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cocktail