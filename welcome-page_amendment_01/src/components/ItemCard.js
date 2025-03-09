
function ItemCard(props) {

    return (

        <>
            <div class="col-md-3">
                <div class="p-3 text-center text-md-start">
                    <a href="#" class="d-inline-block">
                        <img src={props.image} alt="Samyang Buldak 4 Cheese" class="img-fluid w-100 transition hover-shadow" style={{ maxWidth: "300px" }} />
                    </a>
                    <p class="mt-2 fw-bold">
                        <a href="#" class="text-decoration-none text-dark fw-bold hover-text">
                            {props.name}
                        </a>
                    </p>
                    <p class="text-muted">HOT CHICKEN RAMEN (120G)</p>
                    <p class="text-warning">FIERY CHEESE BLEND</p>
                    <p class="fw-bold">
                        <span class="text-danger">{props.price} LKR </span>
                        <del class="text-muted">1800 LKR</del>
                    </p>
                </div>
            </div>
        </>
    );
}

export default ItemCard;