import React, { useContext } from 'react'
import RecipeForm from './form/RecipeForm'
import { RecipeContext } from '../context/RecipeContext'
import { useNavigate } from 'react-router-dom'

const AddRecipe = () => {

    const navigate = useNavigate();

    const { recipes, setRecipes} = useContext(RecipeContext);

    const handleOnSubmit = (recipe) => {
        setRecipes([recipe, ...recipes]);
        navigate("/")
    }


    return (
        <div className='addForm'>
            <RecipeForm handleSubmit={handleOnSubmit} />
        </div>
    )
}

export default AddRecipe