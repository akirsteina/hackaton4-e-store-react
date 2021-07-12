
import '../../Assets/Css/categories.css';

function Adress({ billingAddress, setBillingAddress, shippingAddress, setShippingAddress, billingAddressClass, handleCheckBox }) {

    return (
        <div className="row my-5">
            <div className="col">
                <div className="mb-3">
                    <label htmlFor="shipping-address" className="form-label">Shipping address:</label>
                    <textarea className="form-control address" id="shipping-address" rows="7" value={shippingAddress} onChange={(event) => { setShippingAddress(event.target.value) }} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" id="flexCheckChecked" onChange={handleCheckBox}/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Is billing address the same as shipping address?
                        </label>
                </div>
                </div>
                <div className="col">
                    <div className={billingAddressClass}>
                        <label htmlFor="billing-address" className="form-label">Billing address:</label>
                        <textarea className="form-control address" id="billing-address" rows="7" value={billingAddress} onChange={(event) => { setBillingAddress(event.target.value) }} />
                    </div>
                </div>
                <div className="col-12 text-end">
                    <button className="btn category-button mx-3 fw-bolder">Next</button>
                </div>
            </div>
            )
}

            export default Adress;