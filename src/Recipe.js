import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, link, diet, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h3>{diet}</h3>
            <p>{calories}</p>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <a href={link} target="_blank" rel="noreferrer">Read Full Recipe</a>
            <img className={style.image} src={image} alt="Recipe IMG"/>
        </div>
    );
}

export default Recipe;