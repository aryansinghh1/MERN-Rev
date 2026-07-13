import "./Login.css";

function Login(){
    return(
        <div className="login-container">
            <form  action="">
            <h2>Welcome Back</h2>
            <input className="input-box" type="email" placeholder="Enter Your Email" required/>
            <input className="input-box" type="password" placeholder="Enter Your Password" required/>
            <button className="sub-btn" type="submit">Login</button>
            </form>

        </div>
    )
}
export default Login;