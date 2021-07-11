import '../Assets/Css/home.css';
import { NavLink } from 'react-router-dom';
import carousel1 from '../Assets/Images/carousel-1.jpg';
import carousel2 from '../Assets/Images/carousel-2.jpg';
import carousel3 from '../Assets/Images/carousel-3.jpg';
import logo from '../Assets/Images/logo.png';
import categories from '../Data/Categories';


function Home() {
  

    const categoriesCards = categories.map((category, index) => {
        return (
            <div key={index} className="col-12 col-sm-6 col-md-4 card-wrapper">
                <div className="card">
                    <NavLink to={`/categories/${category.id}`} className="card-element">
                        <img src={category.image} className="card-img-top" alt="..." />
                        <div className="card-body card-img-overlay">
                            <p className="card-text text-center fs-4">{category.title}</p>
                        </div>
                    </NavLink>
                    <NavLink to={`/categories/${category.id}`} className="btn btn-lg category-btn">Explore</NavLink>
                </div>
            </div>
        )
    })

    return (
        <main>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col">
                        <div className="hero-image-wrapper">
                            <div className="main-text-wrapper">
                                <h1 className="display-4 main-title text-center mb-0">Hiking Frenzy</h1>
                                <div className="text-center muted fs-5 pt-0">WE MAKE ADVENTURES HAPPEN</div>
                                <div className="wrap d-flex justify-content-center py-2">
                                    <NavLink to="/categories"><div className="rhombus"><p>FIND OUT MORE</p></div></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: '#243d42' }}>
                <div className="row py-4">
                    <div className="col-12 col-md-5 offset-md-1 text-center about-txt">
                        <img src={logo} className="logo-img" alt="" />
                        <h1 className="display-4 main-title text-center pt-2 my-0">Discover Hiking Frenzy</h1>
                        <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quibusdam delectus recusandae unde pariatur veritatis aliquid quo esse aliquam. Inventore ratione suscipit, explicabo eius quaerat impedit velit iste sunt aliquam! Inventore ratione suscipit, explicabo eius quaerat impedit velit iste sunt aliquam! Inventore ratione suscipit, explicabo eius quaerat impedit velit iste sunt aliquam!</p>
                    </div>
                    <div className="col-12 col-md-5 d-flex justify-content-center">
                        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={carousel1} className="d-block w-100 rounded-circle" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel2} className="d-block w-100 rounded-circle" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel3} className="d-block w-100 rounded-circle" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-4">
                    <div className="col-12">
                        <p className="special-paragraph lead fs-3 text-center pb-2">Shop now!</p>
                    </div>
                    <div className="row">
                        {categoriesCards}
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Home;