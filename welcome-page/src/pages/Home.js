import image_01 from "../assets/images/01.jpg";
import image_02 from "../assets/images/02.jpg";
import image_03 from "../assets/images/03.jpg";

function Home() {
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
                        </ol>
                    </nav>
                </div>
            </header>


            <div className="container py-5">
                <h1 className="display-4 text-center">Welcome to Market Nest</h1>
                <p className="lead text-center">Explore our products and services with ease. Enjoy a seamless shopping experience.</p>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={image_01} alt="Product" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Our Latest Product</h5>
                                <p className="card-text">Check out our new range of products that are designed for you!</p>
                                <a href="/product" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={image_02} alt="Service" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Exceptional Services</h5>
                                <p className="card-text">We offer a wide range of services to meet your needs. Check them out!</p>
                                <a href="/about" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={image_03} alt="Customer Support" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">24/7 Customer Support</h5>
                                <p className="card-text">Our support team is here to help you with any queries or issues.</p>
                                <a href="/contact" className="btn btn-primary">Get in Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
