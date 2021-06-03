import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.2rem solid black;
  border-color: ${props => props.cart ? "var(--mainYellow)" : "black"};
  color: white;
  color: ${props => (props.cart ? "var(--mainYellow)" : "black")};
  border-radius: 0.5rem;
  padding: 1.0rem 1.1rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: linear-gradient(to bottom, #00cc00 0%, #003300 95%);;
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "linear-gradient(to bottom, #00cc00 0%, #003300 95%);"};
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
