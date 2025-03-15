import { Link } from "react-router-dom";
import image_00 from "../assets/images/00.png";

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid d-flex align-items-center justify-content-between">

                    <a className="navbar-brand ms-2" href="#">
                        <img src={image_00} alt="logo" style={{ maxWidth: '80px', height: 'auto' }} />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu"
                        style={{ borderColor: '#d6d6d6', marginBottom: '5px' }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/mycart">My Cart</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                    Help
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Login</a></li>
                                    <li><a className="dropdown-item" href="#">Hotline</a></li>
                                    <li><a className="dropdown-item" href="#">WhatsApp</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                    <form className="d-flex ms-auto col-12 col-sm col-md col-lg-6"
                        style={{ maxWidth: '520px', minWidth: '250px' }}>
                        <input className="form-control me-2 ms-2" type="text" placeholder="Search" />
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>
                </div>
            </nav>

            <br /><br />
        </>
    );
}

export default Header;
