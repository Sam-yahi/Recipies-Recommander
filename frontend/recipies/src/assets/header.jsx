import React from "react";
import ReactDom from "react-dom";
import "./header.css";


const Header = ({ onRecipeListClick }) => {
  return (
    <header>  
        <ul>
            <li className="title-header"><h1><a href="../pages/home.jsx">Recipe Recommander</a></h1></li>
            <li><button onClick={onRecipeListClick}>Find your Recipe</button></li>
        </ul>      

    </header>
  );
}
export default Header;

