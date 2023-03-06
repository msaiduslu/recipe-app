import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./router/PrivateRouter";
import RecipeDetail from "./Pages/RecipeDetail";
import { useState } from "react";


function App() {
  const [login, setLogin] = useState({ username: "", password: "" })
  const authentication = () => {
    login = { username: username, password: password };
  }

  return (
    <>
      <Routes>
        <Route path="login" element={<Login login={login} setLogin={setLogin} />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details" element={<RecipeDetail />} />
        </Route>





      </Routes>
    </>
  );
}

export default App;
