import { useNavigate } from "react-router-dom";

const Recipe = ({ recipe, handleRemoveRecipe }) => {

    const navigate = useNavigate();

    const { id, name, ingredient, process, date } = recipe;
    return (
        <div className="recipe">
            <h2>{name}</h2>
            <div className="recipeDetail">
                <p>Ingredient: {ingredient}</p>
                <p>Process: {process}</p>
                <p>Date: {new Date(date).toDateString()}</p>
            </div>
            <div className="buttons">
                <button onClick={() => navigate(`/edit/${id}`)} >Edit</button>
                <button onClick={() => handleRemoveRecipe(id)} >Delete</button>
            </div>
        </div>
    )
}

export default Recipe