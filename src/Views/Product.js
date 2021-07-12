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
            <div key={index} className="col-6 col-lg-4 p-1 text-center">
                <img alt="" src={image} className="img-fluid" onMouseEnter={() => { setMainImage(image) }} />
            </div>
        )
    });

    const popUpWindow = () => {
        swal("Great!", `The ${product.title} was added to cart!`, "success", {
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
                            <div className="row">
                                <div className="col-12 text-center">
                                    <img src={mainImage} alt="" className="product-image img-fluid rounded" />
                                </div>
                                {productImages}
                            </div>
                        </SRLWrapper>
                    </div>
                    <div className="col-12 col-md-6 col-lg-8 px-5">
                        <form>
                            <div className="row pb-3">
                                <div className="col-12 pb-2">
                                    <h4>
                                        Price:
                                        <span className="badge price-badge mx-1">{product.price.toFixed(2)} EUR</span>
                                    </h4>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <select className="form-select mb-3" aria-label="">
                                        <option defaultValue hidden>Choose size</option>
                                        <option value="1">XS</option>
                                        <option value="2">S</option>
                                        <option value="3">M</option>
                                        <option value="4">L</option>
                                        <option value="5">XL</option>
                                    </select>
                                </div>
                                <div className="col-12 col-lg-6 text-end">
                                    <span>Choose color: </span>
                                    <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
                                    <label className="btn btn-warning p-3" htmlFor="option1"></label>

                                    <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
                                    <label className="btn btn-danger p-3" htmlFor="option2"></label>

                                    <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
                                    <label className="btn btn-primary p-3" htmlFor="option3"></label>
                                </div>

                                <div className="col-12 text-end py-2">
                                    <button type="button" className="btn btn-success fs-6 fw-bold" onClick={popUpWindow}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </form>
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

