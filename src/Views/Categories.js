import { NavLink } from 'react-router-dom';
import '../Assets/Css/categories.css';
import Breadcrumbs from '../Components/Breadcrumbs';
import categories from '../Data/Categories';

function Categories() {
    const breadcrumbPaths = [
        { link: '/', label: 'Home' },
        { label: 'Categories' },
    ];

    const categoryElements = categories.map((category, index) => {
        return (
            <div key={index} className="row py-2">
                <div className="col-12 col-sm-6 col-md-3 text-center py-2">
                    <NavLink to={`/categories/${category.id}`}>
                        <img src={category.image} alt="" className="categories-image img-fluid rounded" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-9 d-grid mx-auto">
                    <h1 className="display-6 special-title">{category.title}</h1>
                    <p className="lead">{category.description}</p>
                    <NavLink to={`/categories/${category.id}`} className="btn category-button mt-auto">Explore</NavLink>
                </div>
                <hr className="mt-4" />
            </div>
        )

    })

    return (
        <main>
            <div className="container pb-5">
                <div className="row">
                    <hr />
                    <div className="col-12">
                        <Breadcrumbs paths={breadcrumbPaths} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-4 special-title categories-title mb-5 mt-2">Discover Hiking Frenzy Categories</h1>
                    </div>
                </div>
                {categoryElements}
            </div>

        </main>
    )
}

export default Categories;