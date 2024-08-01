import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setConnected, setToken} from '../../actions/signin';
import logo from '../../assets/img/argentBankLogo.webp';
import "./header.css";

function Header() {
    const isConnected = useSelector(state => {
        console.log('isConnected:', state.signin.connected);
        return state.signin.connected;
    });
    const dispatch = useDispatch();
   

  

    const handleSignout = () => {
        console.log('Dispatching sign out');
        dispatch(setConnected(false));
        dispatch(setToken(null));
    };


    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img src={logo} alt="ArgentBank logo" className="main-nav-logo-image"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
            
                <div>
                    {isConnected ? (
                        <>
                            <NavLink to="/profile" className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                <span style={{ marginRight: '10px' }}>Hello, </span> {/* Affichage du firstName */}
                            </NavLink>
                            <NavLink to="/" className="main-nav-item" onClick={handleSignout}> 
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </NavLink>
                        </>
                    ) : (
                        <NavLink to="/login" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    )}
                </div>
             
            </nav>
        </header>
    )
}

export default Header;