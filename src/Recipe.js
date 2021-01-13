import React from 'react';

const Recipe = ({title, calories, image, link, diet, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h3>{diet}</h3>
            <p>{calories}</p>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img src={image} alt="Recipe IMG"/>
            {/* <a href={link} target="_blank" rel="noreferrer">Read Full Recipe</a> */}
        </div>
    );
}

export default Recipe;