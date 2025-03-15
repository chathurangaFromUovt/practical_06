import { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

import productImage_01 from "../assets/images/product1.jpg";
import productImage_02 from "../assets/images/product2.jpg";
import productImage_03 from "../assets/images/product3.jpg";
import productImage_04 from "../assets/images/product4.jpg";
import productImage_05 from "../assets/images/product5.jpg";
import productImage_06 from "../assets/images/product6.jpg";
import productImage_07 from "../assets/images/product7.jpg";
import productImage_08 from "../assets/images/product8.jpg";

function Product() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Notification state
    const [isNotified, setIsNotified] = useState(false);

    // Function to add items to the cart
    const addToCart = (item) => {
        setCart(prevList => {
            const updatedCart = [...prevList, item];
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage after cart change
            return updatedCart;
        });

        // Show notification
        setIsNotified(true);

        // Hide notification after 3 seconds
        setTimeout(() => {
            setIsNotified(false);
        }, 3000);
    };

    // Log the cart whenever it changes (after state update)
    useEffect(() => {
        console.log(cart);
    }, [cart]);

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
                                Products
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>

            <div className="container">
                {isNotified && (
                    <div
                        className="alert alert-success alert-dismissible fade show position-fixed bottom-0 end-0 mb-4 me-4 w-auto"
                        role="alert"
                        style={{ zIndex: 1050, minWidth: '200px' }}
                    >
                        <strong>Item added to cart!</strong>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => setIsNotified(false)} // Set the state to false when the alert is closed
                        ></button>
                    </div>
                )}


                <div className="row">
                    <ItemCard image={productImage_01} name="Ramyeon (라면)" price="1120" onAddCart={addToCart} />
                    <ItemCard image={productImage_02} name="Japchae (잡채)" price="1100" onAddCart={addToCart} />
                    <ItemCard image={productImage_03} name="Bibim Guksu (비빔국수)" price="1200" onAddCart={addToCart} />
                    <ItemCard image={productImage_04} name="Jajangmyeon (짜장면)" price="1350" onAddCart={addToCart} />
                    <ItemCard image={productImage_05} name="Suyuk Guksu (수육국수)" price="1250" onAddCart={addToCart} />
                    <ItemCard image={productImage_06} name="Naengmyeon (냉면)" price="1800" onAddCart={addToCart} />
                    <ItemCard image={productImage_07} name="Banchan Guksu (반찬국수) " price="1300" onAddCart={addToCart} />
                    <ItemCard image={productImage_08} name="Chajangmyeon (차장면)" price="1450" onAddCart={addToCart} />
                </div>
            </div>
        </>
    );
}

export default Product;
