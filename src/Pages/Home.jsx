import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [recipeData, setRecipeData] = useState([]);
  const getRecipesFromApi = async (query, meal) => {
    const APP_ID = "aa9f9d99";
    const APP_KEY = "a5ccb4d78b3fccbf001e21081dddc06b";
    const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
    const response = await axios(BASE_URL);
    const newResponse = response.data.hits;
    const arrangedResponse = newResponse.map((item, index) => {
      return { id: index, ...item.recipe };
    });
    setRecipeData(arrangedResponse);
  };

  return (
    <div>
      <Navbar />
      <Header onGetRecipesFromApi={getRecipesFromApi} />
      {recipeData.map((item) => {
        return <Card data={item} key={item.id} />;
      })}
    </div>
  );
};

export default Home;
