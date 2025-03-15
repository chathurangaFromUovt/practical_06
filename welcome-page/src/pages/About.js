function About() {
    return (
        <>
            <header className="p-5 d-flex flex-column flex-md-row align-items-center justify-content-between bg-light shadow-sm"
                style={{ backgroundColor: '#f8f9fa' }}>
                <div className="col-12 col-md-6">
                    <h2 className="text-center text-md-start text-dark fw-bold" style={{ marginLeft: '15px', fontSize: '2rem' }}>
                        Market Nest
                    </h2>
                </div>

                <div className="container-fluid col-12 col-md-6 mt-4 mt-md-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-md-end">
                            <li className="breadcrumb-item">
                                <a href="#" className="text-decoration-none text-dark">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page" style={{ fontWeight: 'bold', color: '#dc3545' }}>
                                About
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>


            <div className="container py-5">
                <h1 className="display-4 text-center">About Us</h1>
                <p className="lead text-center">
                    We are a team of passionate individuals committed to providing top-notch products and services.
                    Our goal is to make your shopping experience as smooth and enjoyable as possible.
                </p>
                <section className="mt-5">
                    <h2>Our Story</h2>
                    <p>
                        Our journey started in 2015 with a simple idea: to create high-quality products that are accessible to everyone.
                        We have grown significantly over the years and now offer a wide range of products tailored to our customers' needs.
                    </p>
                </section>

                <section className="mt-5">
                    <h2>Our Vision</h2>
                    <p>
                        To become the leading provider of innovative solutions in the industry, offering products and services that meet the highest standards of quality and reliability.
                    </p>
                </section>

                <section className="mt-5">
                    <h2>Our Team</h2>
                    <p>
                        We have a diverse and talented team of professionals who work tirelessly to bring the best experiences to our customers.
                        Our team's commitment is the foundation of our success.
                    </p>
                </section>
            </div>
        </>
    );
}

export default About;
