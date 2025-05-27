import React, { createContext, useState } from 'react';

export const RecipeContext = createContext(null);  // Capital name
export const RecipeProvider = ({ children }) => {
    const [data, setData] = useState([]);

    return (
        <RecipeContext.Provider value={{ data, setData }}>
            {children}
        </RecipeContext.Provider>
    );
};
