import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink, useParams } from 'react-router-dom';
import categories from '../Data/Categories';


function Category() {
    const { categoryID } = useParams();
    const filteredCategories = categories.filter((category) => categoryID === category.id);
    const category = filteredCategories[0];

    const breadcrumbPaths = [
        { link: '/', label: 'Home' },
        { link: '/categories', label: 'Categories' },
        { label: category.title },
    ];

    const productCards = category.products.map((product, index) => {
        return (
            <div key={index} className="col-6 col-sm-4 col-lg-3 col-xl-2 card-wrapper product-wrapper">
                <div className="card">
                    <NavLink to={`/categories/${category.id}/${product.id}`} className="card-element">
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body card-img-overlay d-grid mx-auto">
                            <p className="card-text text-center fs-4 fw-bold mb-auto">{product.title}</p>
                            <span className="badge fs-5 bg-success mt-auto">{product.price.toFixed(2)} EUR</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    });



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
                    <h1 className="display-4 special-title categories-title mb-5 mt-2">{category.title}</h1>
                    <div className="col-10 offset-1 col-sm-5 offset-sm-1 col-md-2 offset-md-1 text-center py-2">
                        <img src={category.image} alt="" className="categories-image img-fluid rounded" />
                    </div>
                    <div className="col-10 offset-1 col-sm-5 offset-sm-1 col-md-8 d-grid mx-auto">
                        <p className="lead">{category.description}</p>
                    </div>
                </div>
                <div className="row">
                    {productCards}
                </div>
            </div>
        </main>

    )
}

export default Category;