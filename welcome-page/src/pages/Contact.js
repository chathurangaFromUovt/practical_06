import React from "react";

function Contact() {
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
                                Contact
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>



            <div className="container py-5">
                <h1 className="display-4 text-center">Contact Us</h1>
                <p className="lead text-center">
                    We'd love to hear from you! Please fill out the form below, and we'll get in touch with you as soon as possible.
                </p>

                <form className="mt-4">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <div className="mt-5">
                    <h2>Our Office</h2>
                    <p><strong>Location:</strong> 123 Business Avenue, Colombo, Sri Lanka</p>
                    <p><strong>Phone:</strong> +94 112 345 678</p>
                    <p><strong>Email:</strong> contact@ourwebsite.com</p>
                </div>
            </div>
        </>
    );
}

export default Contact;
