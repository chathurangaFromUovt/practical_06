import { useState, useEffect } from "react";

function MyCart() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Update localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Function to remove item from cart
    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

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
                                My Cart
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>


            <div className="container p-4">
                <div className="row">
                    {cart.length === 0 ? (
                        <div className="col-12 text-center">
                            <p className="fs-5 text-muted">Your cart is empty!</p>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <div className="card border-0 shadow-sm">
                                    <img src={item.image} alt={item.name} className="card-img-top rounded" style={{ height: "250px", width: "100%", objectFit: "cover" }} />
                                    <div className="card-body text-center">
                                        <h5 className="text-dark fw-bold">{item.name}</h5>
                                        <p className="text-danger fs-5 fw-bold">{item.price} LKR</p>
                                        <button
                                            className="btn btn-sm btn-outline-danger w-100"
                                            onClick={() => removeFromCart(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default MyCart;
