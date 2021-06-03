import React from "react";
import styled from "styled-components";
import { AccountBox } from "../accountBox";
// import { Footer } from "../../components/Footer";
// import { Navbar } from "./components/Navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer/index";

import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function CustomerAccessPage(props) {
  const { action } = useParams();
  return (
    <PageContainer >
      {/* <Navbar /> */}
      <StyledInnerContainer>
        <AccountBox initialActive={action}/>
      </StyledInnerContainer>
      {/* <Footer /> */}
    </PageContainer>
  );
}
