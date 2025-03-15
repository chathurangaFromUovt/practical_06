function Footer() {
    return (
        <>
            <footer>
                <br />
                <div className="py-5 bg-dark-subtle">
                    <div className="container">
                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6">
                                <h4>About us</h4>
                                <p>
                                    This is a wider card with supporting text below
                                    as a natural lead-in to additional content.
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <h4>Important links</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-dark">About us</a></li>
                                    <li><a href="#" className="text-dark">Privacy policy</a></li>
                                    <li><a href="#" className="text-dark">Terms of services</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <h4>Our location</h4>
                                <p>
                                    No. 000<br />
                                    High Level Road<br />
                                    Srilanka
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <h4>Stay updated</h4>
                                <form>
                                    <div className="mb-3">
                                        <input className="form-control" type="email" placeholder="E-mail" required />
                                    </div>
                                    <button className="btn btn-dark w-100" type="button">
                                        Subscribe now!
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-dark py-3">
                    <div className="text-center text-white">
                        <p className="mb-0">Copyright © 2025</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
