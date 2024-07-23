import Signinform from '../../components/signinform';
import "./signin.css"


function Signin() {
    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Signinform />
        </section>
      </main>
    )
}

export default Signin;