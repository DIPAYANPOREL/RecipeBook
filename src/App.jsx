import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ListRecipe from "./components/ListRecipe";
import AddRecipe from "./components/AddRecipe";
import RecipeProvider from "./context/RecipeContext";
import EditRecipe from "./components/EditRecipe";

function App() {
  return (

    <div className="container">
      <RecipeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ListRecipe />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/edit/:id" element={<EditRecipe />} />
        </Routes>
      </RecipeProvider>
    </div>
  );
}

export default App;
