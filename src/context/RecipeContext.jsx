import { createContext, useState } from "react"

export const RecipeContext = createContext();


const RecipeProvider = ({children}) => {


    const [recipes, setRecipes] = useState(useLocalStorage("recipes", []));

    const value = { recipes, setRecipes }

  return (
    <RecipeContext.Provider value={value} >
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider