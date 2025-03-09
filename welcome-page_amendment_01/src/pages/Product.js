import Footer from '../components/Footer';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';
import '../css/Product.css'

import productImage_01 from "../images/product1.jpg";
import productImage_02 from "../images/product2.jpg";
import productImage_03 from "../images/product3.jpg";
import productImage_04 from "../images/product4.jpg";
import productImage_05 from "../images/product5.jpg";
import productImage_06 from "../images/product6.jpg";
import productImage_07 from "../images/product7.jpg";
import productImage_08 from "../images/product8.jpg";

function Product() {

    const productInfo = { image: productImage_01, name: 'Samyang Buldak 4 Cheese', price: '1120' };

    return (

        <>
            <Header name='product' />

            <header class="p-5 d-flex flex-column flex-md-row align-items-center justify-content-between bg-body-secondary"
                style={{
                    backgroundColor: '#f8f9fa;'

                }}>

                <div class="text-dark col-12 col-md-6">
                    <h2 class="text-center text-md-start" style={{
                        marginLeft: '15px'
                    }}>PRODUCTS</h2>
                </div>

                <div class="container-fluid col-12 col-md-6 mt-4 mt-md-0">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center justify-content-md-end">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
            </header>

            <div class="container">
                <div class="container">
                    <div class="row">
                        <ItemCard image={productInfo.image} name={productInfo.name} price={productInfo.price} />
                        <ItemCard image={productImage_02} name="Nongshim Shin Ramyun" price="1100" />
                        <ItemCard image={productImage_03} name="Paldo Bibim Men" price="1200" />
                        <ItemCard image={productImage_04} name="Indomie Mi Goreng" price="1350" />
                        <ItemCard image={productImage_05} name="MAMA Tom Yum" price="1250" />
                        <ItemCard image={productImage_06} name="Paldo Bibim Men" price="1800" />
                        <ItemCard image={productImage_07} name="Samyang Buldak 4 Cheese" price="1300" />
                        <ItemCard image={productImage_08} name="Paldo Bibim Men" price="1450" />
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Product;