import { Link } from "react-router-dom";

const Navbar = () => {
  const title = "Art App";
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New</Link>
      </div>
    </nav>
  );
};

export default Navbar;
