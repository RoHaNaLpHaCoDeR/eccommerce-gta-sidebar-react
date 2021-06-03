import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./ButtonProduct.js";
import logo from "../../Images/logo.png";

export default class NavbarProduct extends Component {
  render() {
    return (
      <Nav className="navbar">
        <Link to="/products/vagos" className = "navbar-image">
          <img src={logo} alt="store" className="navbar-brand" />
          <span className="navbar-title"><Link to="/products/vagos" className="nav-link">products</Link></span>
        </Link>
        <Link to="/products/vagos/cart" className="cart-logo">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}


const Nav = styled.nav`
  background: linear-gradient(to bottom, #00cc00 0%, #003300 74%);
  max-width: 2000px;
  flex-direction: row;

  .navbar-image{
    margin: 0 auto;
    margin-left: 35px;
    text-decoration:none;
  }
  .navbar-brand{
    width: 12%;
    height: 12%;
    margin: 0 auto;
    margin-left: 20px:  
    flex-direction: center;
    float: left;
  }
  .nav-link {
    text-decoration: none;
    color: white !important;
    font-size: 2rem;
    text-transform: capitalize;
  }
  .navbar-title{
    margin: 15px;
    position: absolute;
    top: 1%;
  }
  .cart-logo{
    margin-right: 100px;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

/* const ButtonContainer = styled.button`
  text-transform: capitalize;
  font - size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border - radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline - color: red;
  cursor: pointer;
  display: inline - block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease -in -out;
    &: hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
`; */
