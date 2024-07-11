import { createContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage";
export const RecipeContext = createContext();


const RecipeProvider = ({children}) => {

    const [recipes, setRecipes] = useLocalStorage("recipes", []);

    const value = { recipes, setRecipes }

  return (
    <RecipeContext.Provider value={value} >
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider