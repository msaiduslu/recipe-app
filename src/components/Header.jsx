import { useState } from "react";
import styled from "styled-components";

export default function Header({ onGetRecipesFromApi }) {
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("breakfast");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGetRecipesFromApi(query, mealType);
    setMealType("breakfast");
    setQuery("");
  };
  return (
    <Flex>
      <h1>Food App</h1>
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        <select
          name="meal-type"
          id="meal-type"
          onChange={(e) => setMealType(e.target.value)}
          value={mealType}
        >
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </select>
      </form>
    </Flex>
  );
}

const Flex = styled.div`
  text-align: center;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  & input {
    border: none;
    background-color: #a70c0c;
    color: white;
    border-radius: 10px;
    padding: 0.3rem;
    width: 200px;
  }
  & ::placeholder {
    color: white;
  }
  & button,
  select {
    padding: 0.3rem 1rem;
    border-radius: 10px;
    border: none;
    margin: 0 0.5rem;
    background-color: rgba(102, 180, 254, 0.6);
    color: white;
  }

  & button:hover {
    cursor: pointer;
  }

  & h1 {
    color: red;
    margin-bottom: 1rem;
  }
`;
