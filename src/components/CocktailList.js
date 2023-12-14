import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom';
const CocktailList = () => {
  const {state,loading} = useGlobalContext();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (state.length < 1) {
    return (
      <h2 style={{textAlign:"center"}}>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
      <div style={{ fontSize: "30px", fontWeight: "bold", marginBottom:"30px"}}>Cocktails</div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {
          state.map((item,index) => (
            <div key={item.idDrink} style={{marginRight:"25px",marginBottom:"20px",backgroundColor:"white"}}>
              <img src={item.strDrinkThumb} alt={item.strDrink} style={{height:"250px",width:"330px"}}/>
              <p style={{fontSize:"27px",fontWeight:"bold",marginLeft:"20px"}}>{item.strDrink}</p>
              <p style={{fontSize:"22px",marginTop:"-28px",marginLeft:"20px"}}>{item.strGlass}</p>
              <p style={{marginTop:"-20px",marginLeft:"20px"}}>{item.strAlcoholic}</p>
              <Link to={`/cocktail/${index}`}>
              <button style={{marginLeft:"20px",marginBottom:"20px"}}>
                Details
              </button>              
              </Link> 
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CocktailList