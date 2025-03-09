function Footer() {
    return (
        <>
            <footer>
                <div class="py-5 bg-dark-subtle">
                    <div class="container">
                        <div class="row gy-4">

                            <div class="col-lg-3 col-md-6">
                                <h4>About us</h4>
                                <p>
                                    This is a wider card with supporting text below
                                    as a natural lead-in to additional content.
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <h4>Important links</h4>
                                <ul class="list-unstyled">
                                    <li><a href="#" class="text-dark">About us</a></li>
                                    <li><a href="#" class="text-dark">Privacy policy</a></li>
                                    <li><a href="#" class="text-dark">Terms of services</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <h4>Our location</h4>
                                <p>
                                    Milannagar bazar<br />
                                    Tamluk, East Medinipore, West Bengal<br />
                                    720001, India
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <h4>Stay updated</h4>
                                <form>
                                    <div class="mb-3">
                                        <input class="form-control" type="email" placeholder="E-mail" required />
                                    </div>
                                    <button class="btn btn-dark w-100" type="button">
                                        Subscribe now!
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-dark py-3">
                    <div class="text-center text-white">
                        <p class="mb-0">Copyright © 2024</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;