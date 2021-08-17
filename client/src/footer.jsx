import React from "react";
import styled from "styled-components";

const RootContainer = styled.div`  
    display: flex;
    background: black;    
    right: 0;
    bottom: 10vw;    
`;
const TextContainer = styled.div`
`;

export default () => {
    return (
        <RootContainer>
            <TextContainer>About</TextContainer>
            <TextContainer>Other</TextContainer>
        </RootContainer>
    );
}
