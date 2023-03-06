import { useState } from "react";

const Header = ({ onGetRecipesFromApi }) => {
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("breakfast");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGetRecipesFromApi(query, mealType);
    setMealType("breakfast");
    setQuery("");
  };
  return (
    <div>
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
    </div>
  );
};

export default Header;
