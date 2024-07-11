import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import Recipe from './Recipe';


const ListRecipe = () => {

    const { recipes, setRecipes } = useContext(RecipeContext);

    const handleRemoveRecipe = (id) => {
        const filterRecipes = recipes.filter(recipe => recipe.id !== id);
        setRecipes(filterRecipes);
    }

    return (
        <div className='listRecipe' >
            {recipes.length ? recipes.map(recipe => (
                <Recipe recipe={recipe} key={recipe.id} handleRemoveRecipe={handleRemoveRecipe} />
            )) : (
                <p className='noData' >No recipe available, please add some recipe to see!</p>
            )}
        </div>
    )
}

export default ListRecipe