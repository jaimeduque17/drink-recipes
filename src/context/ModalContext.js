import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

// create context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    // provider state
    const [idrecipe, setIdrecipe] = useState(null);

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