import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext()

export const AppProvider=({children})=>{
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    const [state,setState] = useState([])
    const [searchTerm,setSearchTerm] = useState("");
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            setState(data.drinks || []);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, [searchTerm]);
    
  
    return(
        <AppContext.Provider value={{state,setSearchTerm,loading}}>{children}
        </AppContext.Provider>
    )
        
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}