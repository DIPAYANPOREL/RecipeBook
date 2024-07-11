import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const RecipeForm = ({ recipe, handleSubmit }) => {

    const [recipeState, setRecipeState] = useState({
        name: recipe ? recipe.name : "",
        ingredient: recipe ? recipe.ingredient : "",
        process: recipe ? recipe.process : ""
    });

    console.log(recipeState);



    const handleChange = (e) => {
        setRecipeState({
            ...recipeState,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit({
            id: uuidv4(),
            date: new Date(),
            ...recipeState
        });
        setRecipeState({ name: "", ingredient: "", process: "" })
    };

    const renderInputField = (label, placeholder, name) => (
        <div className='inputField' >
            <label>{label}</label>
            <input value={recipeState[name]} onChange={handleChange} name={name} type="text" placeholder={placeholder} />
        </div>
    )

    const disabledSubmit = !recipeState.name || !recipeState.ingredient || !recipeState.process;

    return (
        <form onSubmit={onSubmit} className='form' >
            {renderInputField("Recipe name", "Enter the name of the dish....", "name")}
            {renderInputField("Recipe ingredient", "Enter the name of the ingredients....", "ingredient")}
            {renderInputField("Making process", "Describe making process....", "process")}
            <button type='submit' className='btnForm' disabled={disabledSubmit}>{recipe ? "Update" : "Submit"}</button>
        </form>
    )
}

export default RecipeForm