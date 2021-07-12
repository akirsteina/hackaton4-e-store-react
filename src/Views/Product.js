import { useParams } from 'react-router-dom';
import categories from '../Data/Categories';
import Breadcrumbs from '../Components/Breadcrumbs';
import { useState } from 'react';
import '../Assets/Css/categories.css';
import { SRLWrapper } from "simple-react-lightbox";
import swal from 'sweetalert';


function Product() {
    const { categoryID, productID } = useParams();
    const filteredCategories = categories.filter((category) => categoryID === category.id);
    const category = filteredCategories[0];
    const filteredProducts = category.products.filter((product) => productID == product.id);
    const product = filteredProducts[0];
    const [mainImage, setMainImage] = useState(product.images[0]);
    const [productSize, setProductSize] = useState('');
    const [producColor, setProductColor] = useState('');
    if (!product.images[0]) {
        setMainImage('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg')
    }

    const breadcrumbPaths = [
        { link: '/', label: 'Home' },
        { link: '/categories', label: 'Categories' },
        { link: `/categories/${category.id}`, label: category.title },
        { label: product.title },
    ];

    const productImages = product.images.map((image, index) => {
        if (product.images.length === 1) {
            return <div></div>
        }
        return (
            <div key={index} className="col-6 col-sm-4 p-1 text-center">
                <img alt="" src={image} className="img-fluid" onMouseEnter={() => { setMainImage(image) }} />
            </div>
        )
    });

    const handleSelect = (event) => {
        switch (event.target.value) {
            case "0":
                setProductSize("XS");
                break;
            case "1":
                setProductSize("S");
                break;
            case "2":
                setProductSize("M");
                break;
            case "3":
                setProductSize("L");
                break;
            case "4":
                setProductSize("XL");
                break;
        }
    }

    const handleRadio = (event) => {
        switch (event.target.id) {
            case "yellow-product":
                setProductColor("yellow");
                break;
            case "red-product":
                setProductColor("red");
                break;
            case "blue-product":
                setProductColor("blue");
                break;
        }
    }

    const popUpWindow = () => {
        if (!productSize || !producColor) {
            swal("Please choose product size and color!");
            return;
        }
        swal("Great!", `The ${product.title} was added to cart! Size: ${productSize}, color: ${producColor}`, "success", {
            buttons: {
                cart: {
                    text: "View Cart",
                    value: "/cart",
                },
                categories: {
                    text: "Continue Shopping",
                    value: "/categories",
                },
                close: "X"
            },
        })
            .then((value) => {
                switch (value) {

                    case "/cart":
                        window.location = value;
                        break;

                    case "/categories":
                        window.location = value;
                        break;

                    default:
                        break;
                }
            });
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
                <div className="row pt-2 mb-3">
                    <h1 className="display-4 special-title product-title mb-5 mt-2">{product.title}</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <SRLWrapper>
                            <div className="row pb-3">
                                <div className="col-12 text-center">
                                    <img src={mainImage} alt="" className="product-image img-fluid rounded" />
                                </div>
                                {productImages}
                            </div>
                        </SRLWrapper>
                    </div>
                    <div className="col-12 col-md-6 col-lg-8 px-5">

                        <div className="row pb-3">
                            <div className="col-12 pb-2">
                                <h4>
                                    Price:
                                    <span className="badge price-badge mx-1">{product.price.toFixed(2)} EUR</span>
                                </h4>
                            </div>

                            <div className="col-12 col-lg-6">
                                <select className="form-select mb-3" aria-label="" onChange={handleSelect}>
                                    <option defaultValue hidden>Choose size</option>
                                    <option value="0">XS</option>
                                    <option value="1">S</option>
                                    <option value="2">M</option>
                                    <option value="3">L</option>
                                    <option value="4">XL</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-6 text-end">
                                <span>Choose color: </span>
                                <form onChange={handleRadio}>
                                    <input type="radio" className="btn-check" name="options" id="yellow-product" autoComplete="off" />
                                    <label className="btn btn-warning p-3" htmlFor="yellow-product"></label>

                                    <input type="radio" className="btn-check" name="options" id="red-product" autoComplete="off" />
                                    <label className="btn btn-danger p-3" htmlFor="red-product"></label>

                                    <input type="radio" className="btn-check" name="options" id="blue-product" autoComplete="off" />
                                    <label className="btn btn-primary p-3" htmlFor="blue-product"></label>
                                </form>
                            </div>

                            <div className="col-12 text-end py-2">
                                <button type="button" className="btn btn-success fs-6 fw-bold" onClick={popUpWindow}>
                                    Add to cart
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h3>What do you need to know about the {product.title}?</h3>
                                <p className="lead">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </main >
    )
}

export default Product;

