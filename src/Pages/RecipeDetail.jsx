import React from "react";
import { useLocation, Link } from "react-router-dom";
import diet from "../assets/diet.svg";
import Navbar from "../components/Navbar";

const RecipeDetail = () => {
  const { state: data } = useLocation();
  return (
    <div>
      <Navbar />
      <div>
        <h1>{data.label}</h1>
        <img src={diet} alt="detail" />
      </div>
      <div>
        <div>
          <h3>Nutrients</h3>
          <ul>
            <li>
              Calories:
              {` ${Math.round(data.totalNutrients.ENERC_KCAL.quantity)} kcal`}
            </li>
            <li>Fat : {Math.round(data.totalNutrients.FAT.quantity)} g</li>
            <li>Carbs : {Math.round(data.totalNutrients.CHOCDF.quantity)} g</li>
            <li>
              Protein : {Math.round(data.totalNutrients.PROCNT.quantity)} g
            </li>
            <li>
              Cholesterol : {Math.round(data.totalNutrients.CHOLE.quantity)} g
            </li>
          </ul>
        </div>
        <div>
          <img src={data.image} alt="image" />
        </div>
        <div>
          <h3>Ingredients</h3>
          <ul>
            {data.ingredientLines.map((item, index) => (
              <li key={index + 1}>{item}</li>
            ))}
          </ul>
          <Link to={data.url} target="_blank">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
