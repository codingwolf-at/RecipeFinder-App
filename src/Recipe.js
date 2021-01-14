import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, link, diet,}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h4>{diet}</h4>
            <h5>Calories: {parseInt(calories)}</h5>
            <a className={style.link} href={link} target="_blank" rel="noreferrer">Read Full Recipe</a>
            <img className={style.image} src={image} alt="Recipe IMG"/>
        </div>
    );
}

export default Recipe;