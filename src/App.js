import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID = "e8ca060d";
  const APP_KEY = "49d6cf618c6acc3e471dca568f2fc5fe";

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes);
  }

  return (
    <div className="App">
        <h1>Search Recipe</h1>
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">Search</button>
        </form>
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label}
          title={recipe.recipe.label} calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          />
        ))}
    </div>
  );
}

export default App;
