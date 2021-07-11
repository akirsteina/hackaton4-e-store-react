
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page404 from './Views/Page404';
import Home from './Views/Home';
import Categories from './Views/Categories';
import Category from './Views/Category';
import Product from './Views/Product';
import Cart from './Views/Cart';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SimpleReactLightbox from 'simple-react-lightbox';
import { ScrollToTop } from 'react-router-scroll-to-top';

function App() {
  return (
    <div>
      <SimpleReactLightbox>
        <Router>
          <Header />
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route exact path="/categories/:categoryID">
              <Category />
            </Route>
            <Route path="/categories/:categoryID/:productID">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
