import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { signinSuccess, } from '../../store/slices';
import { getUserProfile } from '../../api';
import "./signinform.css";

function Signinform() {
    const dispatch = useDispatch();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // Ajout de l'état local pour afficher l'erreur d'identifint et/ou password
    const navigate = useNavigate();

    async function SubmitSigninForm(event) {
        event.preventDefault();

        const submitLog = {
            email: username,
            password: password,
        };

        const dataSignin = JSON.stringify(submitLog);
        try {

            const loginResponse = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: dataSignin,
            });
            const response = await loginResponse.json();
            console.log('reponse totale', response);

            if (response.status === 200) {
                console.log('Reponse:', response);
                const receivedToken = response.body.token;
                console.log('token reçu:', receivedToken);

                try {
                    const userProfile = await getUserProfile(receivedToken);
                    console.log('Profil utilisateur:', userProfile);

                    const { firstName, lastName, userName} = userProfile.body;

                    dispatch(signinSuccess({ 
                      token: receivedToken, 
                      firstName: firstName,
                      lastName: lastName,
                      userName: userName,
                    }));
                    
                    navigate('/profile');
                } catch (error) {
                    console.error('Erreur lors de la récupération du profil utilisateur:', error);
                    setError("Erreur lors de la récupération du profil utilisateur");
                }
            } else {
                setError("Erreur d'identifiant ou de mot de passe. Réessayez !!!");
                setPassword('');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            setError("Erreur lors de la connexion. Veuillez réessayer.");
        }
    }

    return (
        <form onSubmit={SubmitSigninForm}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e) => setUserName(e.target.value)} value={username} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" /><label>Remember me</label>
            </div>
            <div className="signin-form-error">
                {error && <p>Erreur d'identifiant ou de mot de passe. Réessayez !!!</p>}
            </div>
            <button className="sign-in-button">Sign In</button>
        </form>
    );
}

export default Signinform;
