import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  background: #000000;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f9b0f, #000000);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f9b0f, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function PageContainer(props) {
  return <PageWrapper>{props.children}</PageWrapper>;
}

export const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  background: #000000;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f9b0f, #000000);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f9b0f, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  /*min-height Need more testing*/
  min-height: 70vh;
  //padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
