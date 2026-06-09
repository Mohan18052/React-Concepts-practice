import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/personalinfo">Personal Info</Link>

      <Link to="/registration">Employee Registration</Link>

      <Link to="/uncontrolled">Uncontrolled Form</Link>

      <Link to="/apiusers">API Users</Link>
    </nav>
  );
}

export default Navbar;