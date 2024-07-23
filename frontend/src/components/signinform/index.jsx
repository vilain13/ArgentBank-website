import "./signinform.css";


function Signinform() {
    return (
        <form>
        <div className="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    )
}


export default Signinform;