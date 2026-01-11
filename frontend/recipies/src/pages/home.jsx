import Header from "../assets/header";
import "./style.css";
import { useState } from "react";
import Recommendations from './recommendations'
import ingredientsImage from '../assets/ingredient.png'
import ratingImage from '../assets/rating.png'
import cookingImage from '../assets/cooking.png'
const Home = () => {
    const [route, setRoute] = useState('home')
    
    const handleSetRoute = (routeName) => setRoute(routeName)
  if (route === 'recommendations') {
    return <Recommendations />
  }

  return (
    <>
      <header><Header onRecipeListClick={() => handleSetRoute('recommendations')} /></header>


      <main className="landing-page">
            <section className="content">
        
              <h1>Find your food</h1>
              <p>Discover delicious recipes tailored to your taste buds. Whether you're craving something sweet,
                savory, or healthy, we've got you covered. Start your culinary adventure today!</p>
              <button onClick={() => handleSetRoute('recommendations')}>Get Started</button>
          
          </section>
          
          <section className="void">

          </section>
      </main>
      
      <hero className="hero-section">
        <h2>How it works?</h2>
        <div className="cards">
          <div className="card">
            <img src={ingredientsImage} alt="" />
            <h3>1. Input Ingredients</h3>
            <p>Enter the ingredients you have on hand into our recipe recommender.</p>
          </div>
          <div className="card">
            <img src={ratingImage} alt="" />
            <h3>2. Get Recommendations</h3>   
            <p>Receive personalized recipe suggestions based on your input.</p>
          </div>
          <div className="card">
            <img src={cookingImage} alt="" />
            <h3>3. Cook and Enjoy</h3>
            <p>Follow the recipe instructions to create delicious meals and enjoy!</p>
          </div>
        </div>
      </hero>
    </>
  );
}   
export default Home;