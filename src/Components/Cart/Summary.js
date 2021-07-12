import swal from 'sweetalert';

function Summary({ products, shippingAddress, billingAddress }) {
    let totalPrice = 0;
    const tableElement = products.map((product, index) => {
        totalPrice += (product.price * product.quantity);
        return (
            <tr key={index}>
                <td><img alt="" src={product.image} className="img-fluid rounded-circle summary-img" /></td>
                <td>{product.title}</td>
                <td>
                    <div className="input-group">{product.quantity}</div>
                </td>
                <td>{product.price.toFixed(2)} EUR</td>
                <td>{(product.price * product.quantity).toFixed(2)} EUR</td>
            </tr>
        );
    });

    const handleCheckOutbtn = () => {
        if (!shippingAddress || !billingAddress) {
            swal('Please fill the address fields!');
        } 
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                        <h4>Shipping address:</h4>
                        <p className="lead">
                            {shippingAddress}
                        </p>
                    </div>
                    <div className="col-12">
                        <h4>Billing address:</h4>
                        <p className="lead">
                            {billingAddress}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-8">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableElement}
                    </tbody>
                </table>
                <div className="text-end">
                    <h4>
                        Total:
                        <span className="badge bg-success mx-1">{totalPrice.toFixed(2)} EUR</span>
                        <button className="btn category-button mx-3 fw-bolder" onClick={handleCheckOutbtn}>Check out</button>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Summary;