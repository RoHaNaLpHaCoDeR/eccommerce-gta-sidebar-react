import React, { Component } from "react";
import { ProductConsumer } from "../ProductPages/context";
import { ButtonContainer } from "../ProductPages/ButtonProduct";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="img" style={{height : 500, width : 420}} />
                </div>
                {/* product info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model : {title}</h1>
                  <h4 className="text-uppercase text-danger mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <h3 className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </h3>
                  <p className="text-dark">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/products/vagos">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
