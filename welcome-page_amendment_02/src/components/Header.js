import { Link } from "react-router-dom";

function Header(props) {

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid d-flex align-items-center justify-content-between">

                    <a className="navbar-brand ms-2" href="#">USER</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu"
                        style={{ borderColor: '#d6d6d6', marginBottom: '5px' }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"> About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product"> Products</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Pages</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">404 Page</a></li>
                                    <li><a className="dropdown-item" href="#">Common Page</a></li>
                                    <li><a className="dropdown-item" href="#">FAQ Page</a></li>
                                    <li><a className="dropdown-item" href="#">Hero Page</a></li>
                                    <li><a className="dropdown-item" href="#">Portfolio Page</a></li>
                                    <li><a className="dropdown-item" href="#">Single Page</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
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
