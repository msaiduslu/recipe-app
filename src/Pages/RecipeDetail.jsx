import React from "react";
import { useLocation, Link } from "react-router-dom";
import diet from "../assets/diet.svg";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const RecipeDetail = () => {
  const { state: data } = useLocation();
  return (
    <div>
      <Navbar />
      <Container>
        <WrapperHead>
          <h1>{data.label}</h1>
          <img width="150px" src={diet} alt="detail" />
        </WrapperHead>
        <WrapperMain>
          <ListContainer>
            <h3>Nutrients</h3>
            <ul>
              <li>
                Calories:
                {` ${Math.round(data.totalNutrients.ENERC_KCAL.quantity)} kcal`}
              </li>
              <li>Fat : {Math.round(data.totalNutrients.FAT.quantity)} g</li>
              <li>
                Carbs : {Math.round(data.totalNutrients.CHOCDF.quantity)} g
              </li>
              <li>
                Protein : {Math.round(data.totalNutrients.PROCNT.quantity)} g
              </li>
              <li>
                Cholesterol : {Math.round(data.totalNutrients.CHOLE.quantity)} g
              </li>
            </ul>
          </ListContainer>
          <StyledImageDiv>
            <img src={data.image} alt="image" />
          </StyledImageDiv>
          <ListContainer>
            <h3>Ingredients</h3>
            <ul>
              {data.ingredientLines.map((item, index) => (
                <li key={index + 1}>{item}</li>
              ))}
            </ul>
          </ListContainer>
        </WrapperMain>
      </Container>
    </div>
  );
};

export default RecipeDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  gap: 5rem;
  background-color: #47000094;
`;

const WrapperHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10rem;
  @media (max-width: 500px) {
    gap: 5rem;
  }
`;

const WrapperMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid red;
  margin: 2rem;
  padding: 1rem 5rem;

  @media (max-width: 800px) {
    flex-direction: column;
    border: 1px solid black;
    & img {
      width: 200px;
    }
  }
  & img {
    border-radius: 5%;
    padding: 0.2rem;
  }
`;

const StyledImageDiv = styled.div`
  border: 1px solid red;
  text-align: center;
  margin: 0 3rem;
`;

const ListContainer = styled.div`
  width: 300px;
  text-align: center;
  & ul {
    list-style-type: none;
  }
`;
