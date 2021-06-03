import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../ProductPages/context";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 col-md-6 col-lg-3 my-3 mx-20 justify-content-center">
        <div className="card" style={{height : 325, width : 275}}>
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="img-container p-5 m-2"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/products/vagos/details">
                    <img src={img} alt="img" className="card-img-top" />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <h4 className="align-self-center mb-0">{title}</h4>
            <h4 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h4>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    height:100%;
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    height: 100;
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.2s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.4s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;


















// export default class Product extends Component {
//   render() {
//     const { id, title, img, price, inCart } = this.props.product;
//     return (
//       <ProductWrapper className="card-container">
//           <div className="card">
//             <ProductConsumer>
//               {value => {
//                 return (
//                   <div
//                    className="img-container"
//                    onClick={() => value.handleDetail(id)}
//                  >
//                    <Link to="products/vagos/details">
//                      <img src={img} alt="product" className="card-img-top" />
//                    </Link>
//                    <button
//                      className="cart-btn"
//                      disabled={inCart ? true : false}
//                      onClick={() => {
//                        value.addToCart(id);
//                        value.openModal(id);
//                      }}
//                    >
//                      {inCart ? (
//                        <p className="card-para" disabled>
//                         {''}
//                          in cart
//                        </p>
//                      ) : (
//                        <i className="fas fa-cart-plus" />
//                      )}
//                    </button>
//                  </div>
//                );
//              }}
//            </ProductConsumer>
//            <div className="card-footer">
//              <p className="align-self-center mb-0">{title}</p>
//              <h5 className="text-blue font-italic mb-0">
//                <span className="mr-1">$</span>
//                {price}
//              </h5>
//            </div>
//          </div>
//         </ProductWrapper>
//     );
//   }
// }

// const ProductWrapper = styled.div`
//    .card-container{
//     margin: auto;
//     text-align: center;
//     margin-top: 3px;
//     margin-bottom: 3px;
//     display: flex;
//     flex-direction: row;
//     float: left;
//     align-items: center;
//    }
//    .card {
//     width: 30%;
//     height: auto;
//     display: flex;
//     flex-direction: row;
//     float: left;
//     padding: 4rem;
//     border-color: transparent;
//     transition: all 1s linear;
//    }
//    .card-footer {
//      background: transparent;
//      border-top: transparent;
//      transition: all 1s linear;
//    }
//    &:hover {
//      .card {
//        border: 0.04rem solid rgba(0, 0, 0, 0.2);
//        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
//      }
//      .card-footer {
//        background: rgba(247, 247, 247);
//      }
//    }
//    .img-container {
//      width: 10%;
//      height: auto;
//      position: relative;
//      overflow: hidden;
//      padding: 5px;
//    }
//    .card-img-top {
//      transition: all 1s linear;
//    }
//    .img-container:hover .card-img-top {
//      transform: scale(1.2);
//    }
//    .cart-btn {
//      position: absolute;
//      bottom: 0;
//      right: 0;
//      padding: 0.2rem 0.4rem;
//      background: var(--lightBlue);
//      border: none;
//      color: var(--mainWhite);
//      font-size: 1.4rem;
//      border-radius: 0.5rem 0 0 0;
//      transform: translate(100%, 100%);
//      transition: all 1s ease-in-out;
//    }
//    .img-container:hover .cart-btn {
//      transform: translate(0, 0);
//    }
//    .cart-btn:hover {
//      color: var(--mainBlue);
//      cursor: pointer;
//    }
//    .card-para{
//      text-transform: capitalize;
//      margin-bottom: 0;
//    }
//    .card-footer{
//      display: flex;
//      justify-content: between;
//    }
//  `;