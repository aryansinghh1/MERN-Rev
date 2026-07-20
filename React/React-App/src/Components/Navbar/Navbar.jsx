import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={`navbar ${theme}`}>
      <div className="navbar-brand">MERN Rev</div>
      <nav className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          About
        </NavLink>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme} type="button">
        {theme === "light" ? "Dark mode" : "Light mode"}
      </button>
    </header>
  );
}
export default Navbar;
