import { Link } from "react-router-dom";
import Home from "../Pages/Home";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/">{"<MSU/>"} Recipe</Link>
      </div>
      <div>
        <Link to="/about">ABOUT</Link>
        <Link to="https://github.com/msaiduslu" target="_blank">
          GITHUB
        </Link>
        <Link to="/login">LOGOUT</Link>
      </div>
    </div>
  );
};

export default Navbar;
