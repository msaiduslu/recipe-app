import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/Card";
import styled from "styled-components";

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
      <Container>
        <Header onGetRecipesFromApi={getRecipesFromApi} />
        <FlexGrid>
          {recipeData.map((item) => {
            return <Card data={item} key={item.id} />;
          })}
        </FlexGrid>
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  min-height: 90vh;
  background-image: url(https://img.freepik.com/free-photo/top-view-spices-table-garlic-colorful-spices-ball-pepper-dark-table_140725-119826.jpg?w=1380&t=st=1678178049~exp=1678178649~hmac=984a28eefa2d81e8eaa77f0cc8ec9ff65e25e7f951f081243a808a41f2c50ee0);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
