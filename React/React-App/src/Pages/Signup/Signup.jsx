import "../Signup/Signup.css";
import { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';

function Signup(){
    const { theme } = useContext(ThemeContext);
    return(
        <div className={theme}>
        <div className="signup-container">
            <form action="">
            <h2>Create Account</h2>
            <input className="input-box" type="text" placeholder="Enter Your Name" required/>
            <input className="input-box" type="email" placeholder="Enter Your Email" required/>
            <input className="input-box" type="password" placeholder="Create Your Password" required/>
            <button className="sub-btn" type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    )
}
export default Signup;