import { useState } from "react";
import meal2 from "../assets/meal2.svg";

const Login = ({ login, setLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
  console.log(login);
  return (
    <div>
      <img width="200px" src={meal2} alt="" />
      <h1>{"<MSU/>"} RECIPE </h1>
      <form onSubmit={handleSubmit()} action="">
        <div>
          <input
            type="text"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
