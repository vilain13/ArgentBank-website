import { NavLink } from "react-router-dom"
import logo from '../../assets/img/argentBankLogo.webp'
import "./header.css"

function Header() {
    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img src={logo} alt="ArgentBank logo" className="main-nav-logo-image"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
            
               <div>
                   

                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
             
            </nav>
        </header>
    )
}

export default Header;