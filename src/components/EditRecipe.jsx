import { useContext } from 'react'
import RecipeForm from './form/RecipeForm'
import { RecipeContext } from '../context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom'

const EditRecipe = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { recipes, setRecipes } = useContext(RecipeContext);
    const recipeToEdit = recipes.filter(recipe => recipe.id === id)


    const handleOnSubmit = (recipe) => {
        const filteredRecipe = recipes.filter(recipe => recipe.id !== id);
        setRecipes([recipe, ...filteredRecipe]);
        navigate("/")
    }


    return (
        <div className='addForm'>
            <RecipeForm recipe={recipeToEdit[0]} handleSubmit={handleOnSubmit} />
        </div>
    )
}

export default EditRecipe