import Breadcrumbs from '../Components/Breadcrumbs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Products from "../Components/Cart/Products";
import Address from "../Components/Cart/Address";
import Summary from "../Components/Cart/Summary";
import '../Assets/Css/categories.css';
import { useState } from 'react';
import swal from 'sweetalert';

function Cart() {
    const breadcrumbPaths = [
        { link: '/', label: 'Home' },
        { label: 'Cart' },
    ];

    const [products, setProducts] = useState(
        [
            { title: 'Tent', price: 75.15, quantity: 1, image: 'https://images.unsplash.com/photo-1465311354905-789ff5f7a457?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
            { title: 'Expensive pants', price: 80.99, quantity: 1, image: 'https://images.unsplash.com/photo-1617718223016-77bb6eab95ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=797&q=80' },
            { title: 'Amazing pot', price: 50.49, quantity: 2, image: 'https://images.unsplash.com/photo-1600599067176-1f47e3b6fe47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80' }
        ]);

    const [billingAddress, setBillingAddress] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [billingAddressClass, setBillingAddressClass] = useState('mb-3');

    const handleProductQty = (change, index) => {
        const changedProducts = [...products];
        changedProducts[index].quantity += change;
        if (changedProducts[index].quantity <= 0) {
            changedProducts[index].quantity = 1;
        }
        setProducts(changedProducts);
    }

    const removeProduct = (index) => {
        const changedProducts = [...products];
        changedProducts.splice(index, 1);
        setProducts(changedProducts);
    }

    const handleCheckBox = (event) => {
        if (!shippingAddress) {
            swal('Please fill the shipping address first!');
            event.target.checked = false;
            return;
        };
        if (event.target.checked) {
            setBillingAddress(shippingAddress);
            setBillingAddressClass('mb-3 hidden');
            
        } else {
            setBillingAddressClass('mb-3');
        }
    }

    return (
        <main>
            <div className="container pb-5">
                <div className="row">
                    <hr />
                    <div className="col">
                        <Breadcrumbs paths={breadcrumbPaths} />
                    </div>
                </div>
                <div className="row pt-2 mb-5">
                    <h1 className="display-4 special-title categories-title mb-4 mt-2">Cart</h1>
                    <div className="col">

                        <Tabs>
                            <TabList>
                                <Tab><p className="lead mb-1">Products</p></Tab>
                                <Tab><p className="lead mb-1">Address</p></Tab>
                                <Tab><p className="lead mb-1">Summary</p></Tab>
                            </TabList>
                            <TabPanel>
                                <Products products={products} handleProductQty={handleProductQty} removeProduct={removeProduct} />
                            </TabPanel>
                            <TabPanel>
                                <Address billingAddress={billingAddress} setBillingAddress={setBillingAddress} shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} billingAddressClass={billingAddressClass} handleCheckBox={handleCheckBox} />
                            </TabPanel>
                            <TabPanel>
                                <Summary products={products} billingAddress={billingAddress} shippingAddress={shippingAddress} />
                            </TabPanel>
                        </Tabs>

                    </div>
                </div>
            </div>
        </main>

    )
}

export default Cart;