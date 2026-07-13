import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"
function Footer(){
    const{theme} = useContext(ThemeContext);
    return(
        <div className={theme}>
            <p>This is Footer</p>
        </div>
    )
}
export default Footer;