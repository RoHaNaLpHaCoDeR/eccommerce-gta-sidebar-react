import React from "react";
import styled from "styled-components";

export default function Title({ name, title }) {
  return (
    <Div className="row">
      <div className="div-container">
        <h1 className="div-head">
          {name} <strong className="div-strong">{title}</strong>
        </h1>
      </div>
    </Div>
  );
}

const Div =  styled.div`
  .div-container{
    column: 10;
    margin: auto;
    margin-left: 2px;
    text-align: center;
    font-family: "Oswald", sans-serif !important;
    margin-top: 15px;
    /* letter-spacing: 0.1rem; */
    text-transform: uppercase;
  }
  .div-head{
    color: black;
    text-transform: capitalize;
    font-weight: bold;    
  }
  .div-strong{
    colour: black;
  }
`;
