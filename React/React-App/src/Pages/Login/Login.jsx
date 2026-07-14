import "./Login.css";
import { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';

function Login() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className="login-container">
        <form action="">
          <h2>Welcome Back</h2>
          <input
            className="input-box"
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <input
            className="input-box"
            type="password"
            placeholder="Enter Your Password"
            required
          />
          <button className="sub-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
