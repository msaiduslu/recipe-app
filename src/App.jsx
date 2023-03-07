import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./router/PrivateRouter";
import RecipeDetail from "./Pages/RecipeDetail";
import { useState } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import NotFound from "./Pages/NotFound";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={(username) => setCurrentUser(username)} />}
        />
        <Route path="/" element={<PrivateRouter currentUser={currentUser} />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details" element={<RecipeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
