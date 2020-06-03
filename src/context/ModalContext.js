import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

// create context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    // provider state
    const [idrecipe, setIdrecipe] = useState(null);
    const [recipe, setRecipe] = useState({});

    // when we have a recipe call the API
    useEffect(() => {
        const getRecipe = async () => {
            if(!idrecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;

            const result = await axios.get(url);

            setRecipe(result.data.drinks[0]);
        }
        getRecipe();
    }, [idrecipe]);

    return (
        <ModalContext.Provider
            value={{
                setIdrecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;