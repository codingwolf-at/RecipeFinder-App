import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID = "e8ca060d";
  const APP_KEY = "49d6cf618c6acc3e471dca568f2fc5fe";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect( () => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
        <h1 className="heading">Search Recipe</h1>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" value={search} onChange={updateSearch} type="text"/>
          <button className="search-button" type="submit">Search</button>
        </form>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe key={recipe.recipe.label}
            title={recipe.recipe.label} calories={recipe.recipe.calories} 
            image={recipe.recipe.image} link={recipe.recipe.url}
            diet={recipe.recipe.dietLabels}
            />
          ))}
        </div>
    </div>
  );
}

export default App;
