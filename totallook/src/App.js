import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import ListProducts from './Pages/ListProducts/ListProducts'
import Categories from './Pages/Categories/Categories'
import Shopping from './Pages/ShoppingCart/ShoppingCart'
import Header from './Components/Header/Header'


import Footer from './Components/Footer/Footer'

function App() {


  return (
      <Router>
        <Header />
        												
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
        <Footer />
      </Router>    

  );
};

export default App;
