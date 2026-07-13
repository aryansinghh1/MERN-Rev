import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <p>This is Navbar</p>
      Theme: {theme}
      <button onClick={() => toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default Navbar;
