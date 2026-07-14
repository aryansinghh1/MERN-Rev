import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"
import "./Footer.css";
function Footer(){
    const{theme} = useContext(ThemeContext);
    return(
        <footer className={`footer ${theme}`}>
            <p>Built for learning and practice.</p>
        </footer>
    )
}
export default Footer;