import React from 'react'
import { createContext, useState } from 'react'
import { data } from 'react-router-dom'

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    connst [data, setData] = useState([]);

  return (

    <RecipeContextProvider.Provider value={{ data, setData }}>
      {props.children}
    </RecipeContextProvider.Provider>

  );
};

export default RecipeContext