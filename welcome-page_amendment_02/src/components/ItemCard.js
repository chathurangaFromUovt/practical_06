
function ItemCard(props) {

    return (

        <>
            <div className="col-md-3">
                <div className="p-3 text-center text-md-start">
                    <a href="#" className="d-inline-block">
                        <img src={props.image} alt="Samyang Buldak 4 Cheese" className="img-fluid w-100 transition hover-shadow" style={{ maxWidth: "300px" }} />
                    </a>
                    <p className="mt-2 fw-bold">
                        <a href="#" className="text-decoration-none text-dark fw-bold hover-text">
                            {props.name}
                        </a>
                    </p>
                    <p className="text-muted">HOT CHICKEN RAMEN (120G)</p>
                    <p className="text-warning">FIERY CHEESE BLEND</p>
                    <p className="fw-bold">
                        <span className="text-danger">{props.price} LKR </span>
                        <del className="text-muted">1800 LKR</del>
                    </p>
                </div>
            </div>
        </>
    );
}

export default ItemCard;