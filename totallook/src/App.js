import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import ListProducts from './Pages/ListProducts/ListProducts'
import Categories from './Pages/Categories/Categories'
import Shopping from './Pages/ShoppingCart/ShoppingCart'
import Header from './Components/Header'

function App() {
  return (

      <Router>
        <div>
          <Header />
          <div className="btn-group">					
            <Link to="/" className="btn btn-dark">
            Inicio
            </Link>
            <Link to="/contacto" className="btn btn-dark">
            Contacto
            </Link>					
            <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
            Nosotros
            </NavLink>
          </div>
        </div>
        <hr/>		
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/listproducts">
            <ListProducts />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/shoppingcart">
            <Shopping />
          </Route>
        </Switch>
      </Router>
    
  );
};

export default App;
