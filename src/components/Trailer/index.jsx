import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer/index";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function Trailer() {
  return (
    <PageContainer >
      <StyledInnerContainer>   
        <ReactPlayer 
        width='800px'
        height='420px'
        controls 
        url='https://www.youtube.com/watch?v=QkkoHAzjnUs'
        onReady={() => console.log('onReady CallBack')}
        onStart={() => console.log('onStart CallBack')}
        onPause={() => console.log('onPause CallBack')}
        onEnded={() => console.log('onEnded CallBack')}
        onError={() => console.log('onError CallBack')}
        >
        </ReactPlayer> 
      </StyledInnerContainer>
    </PageContainer>
  );
}
