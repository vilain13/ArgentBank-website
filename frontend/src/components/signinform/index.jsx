import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import * as signinAction from '../../actions/signin';
import "./signinform.css";


function Signinform() {

  const dispatch = useDispatch();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); // État pour "Remember me" ( si coche reprise du ussername et password dans formulaire connexion ) 
    const navigate = useNavigate();


  useEffect(() => {
    // Charger les informations de connexion du localStorage si elles existent
    const storedUsername = localStorage.getItem('username');
    // const storedPassword = localStorage.getItem('password');
    if (storedUsername) {    // si rappel du password avec userName en cas de "remember me" ajouter && storePassword
      setUserName(storedUsername);
      //setPassword(storedPassword);  // si ajout password dans le remember me
      setRememberMe(true);
    }
  }, []);



  async function SubmitSigninForm(event) {
    event.preventDefault();

    const submitLog = {
        email: username,
        password: password,
    };

    const dataSignin = JSON.stringify(submitLog);

    await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: dataSignin,
    })

      .then((resp) => resp.json())
      .then((response) => {
          console.log(response); // Ajout
          if (response.status === 200) {
              if (error) {
                  setError(false);
              }
              dispatch(signinAction.setToken(response.body.token));
              dispatch(signinAction.setConnected(true));

            // Enregistre les informations de connexion si "Remember me" est coché
            if (rememberMe) {
              localStorage.setItem('username', username);
              // localStorage.setItem('password', password);   // si ajout password dans le remember me
            } else {
              localStorage.removeItem('username');
              // localStorage.removeItem('password');    // si ajout password dans le remember me
            }


              navigate('/profile');
          } else {
              setError(true);
              setPassword(''); 
          }
      });
  }

    return (
        <form onSubmit={(event) => SubmitSigninForm(event)}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username"  onChange={(e) => setUserName(e.target.value)} value={username} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} /><label htmlFor="remember-me">Remember me</label>
        </div>
        <div className="signin-form-error">
                {error ? (
                    <p>Erreur d'identifiant ou de mot de passe. Réessayez !!</p>
                ) : null}
            </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    )
}


export default Signinform;