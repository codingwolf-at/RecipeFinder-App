import React from 'react';
import './App.css';

function App() {

  const APP_ID = "e8ca060d";
  const APP_KEY = "49d6cf618c6acc3e471dca568f2fc5fe";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  return (
    <div className="App">
        <h1>Search Recipe</h1>
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" typeof="submit">Search</button>
        </form>
    </div>
  );
}

export default App;
