import { NavLink } from 'react-router-dom';
import '../Assets/Css/navbar.css';
import logo from '../Assets/Images/logo.png';


function Header() {
    return (
        <nav className="navbar text-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/"><img src={logo} className="logo-img" alt="" /></NavLink>
                <div className="navbar-nav d-flex flex-row justify-content-end fs-3">
                    <NavLink className="nav-link mx-2" exact to="/">Home</NavLink>
                    <NavLink className="nav-link mx-2" to="/categories">Shop Now!</NavLink>
                    <NavLink className="nav-link mx-2" to="/cart">Cart</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Header;