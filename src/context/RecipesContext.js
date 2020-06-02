import React, { createContext, useState } from 'react';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearchrecipes] = useState({
        name: '',
        category: ''
    });

    return (  
        <RecipesContext.Provider
            value={{
                setSearchrecipes
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
}
 
export default RecipesProvider;