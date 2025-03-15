function ItemCard(props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card mt-4 shadow-sm border-0 p-3 text-center text-md-start">
                <a href="#" className="d-inline-block">
                    <img
                        src={props.image}
                        alt={props.name}
                        className="img-fluid w-100 rounded"
                        style={{ maxWidth: "280px", height: "auto", objectFit: "cover" }}
                    />
                </a>
                <p className="mt-3 fw-bold">
                    <a href="#" className="text-decoration-none text-dark">
                        {props.name}
                    </a>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column flex-md-row align-items-center">
                        <span className="text-danger fs-5">{props.price} LKR</span>
                        <del className="text-muted fs-6 ms-2">1800 LKR</del>
                    </div>
                    <button
                        onClick={() => props.onAddCart({ name: props.name, price: props.price, image: props.image })}
                        className="btn btn-secondary btn-sm fs-7 ms-2"
                    >
                        BUY NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
