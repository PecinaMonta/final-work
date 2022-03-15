import { Link } from "react-router-dom";
import '../Components/Header.css'

function Header() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                <img className="mx-4" src="/Img/logo.png"  height="130" class="d-inline-block align-top" alt="logo"/>
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                <div className="collapse navbar-collapse justify-content-end mx-4">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" to="/categories" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/categories">All categories</a></li>
                                <li><a className="dropdown-item" href="/clubend">Club</a></li>
                                <li><a className="dropdown-item" href="/shopend">Shop</a></li>
                                <li><a className="dropdown-item" href="/repairend">Repair</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chat">Chat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)
    
}

export default Header;