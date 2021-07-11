import '../..//Assets/Css/categories.css';
import {NavLink} from 'react-router-dom';

function Products({ products, handleProductQty, removeProduct }) {

    let totalPrice = 0;

    let tableElement = products.map((product, index) => {
        totalPrice += (product.price * product.quantity);
        return (
            <tr key={index}>
                <td><img alt="" src={product.image} className="img-fluid rounded-circle cart-img" /></td>
                <td>{product.title}</td>
                <td>
                    <div className="input-group">
                        <button className="btn inline" onClick={() => handleProductQty(-1, index)}>-</button>
                        <input className="form-control qty-input" disabled={true} value={product.quantity} />
                        <button className="btn" onClick={() => handleProductQty(1, index)}>+</button>
                    </div>
                </td>
                <td>{product.price.toFixed(2)} EUR</td>
                <td>{(product.price * product.quantity).toFixed(2)} EUR</td>
                <td><button type="button" className="btn btn-dark" onClick={() => removeProduct(index)}>Remove</button></td>
            </tr>
        );
    });

    if (tableElement.length === 0) {
        tableElement = (<tr>
            <td colSpan="6" className="text-center">
                <h5 className=" pt-5">Your cart is empty! :(</h5>
                <NavLink to={`/categories`} className="btn category-button mt-2 mb-5">Shop now!</NavLink>
            </td>
        </tr>)
    }

    return (
        <div>
            <table className="mt-5 table table-responsive">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total price</th>
                        <th></th>
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
                    <button className="btn category-button mx-3 fw-bolder">Next</button>
                </h4>
            </div>
        </div>
    )
}

export default Products;