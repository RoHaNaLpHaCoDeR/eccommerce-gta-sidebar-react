// import React, { Component } from "react";
// import "./Product_black.css";
// import { Route, Switch } from "react-router-dom";
// import ProductList from "../ProductPages/ProductList";
// import NavbarProduct from "../ProductPages/NavbarProduct";
// import Details from "../ProductPages/Details";
// import Default from "../ProductPages/Default";
// import Cart from "../ProductPages/Cart/Cart";
// import Modal from "../ProductPages/Modal";

class Product_black extends Component {
render() {
    return (
      <React.Fragment>
        <NavbarProduct />
        <Switch>
          <Route exact path="/products/black" component={ProductList} />
          <Route path="/products/black/details" component={Details} />
          <Route path="/products/black/cart" exact component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
export default Product_black;