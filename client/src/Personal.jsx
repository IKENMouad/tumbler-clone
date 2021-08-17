import React from "react";
import styled from "styled-components";


const Presentation = styled.div`    
    margin-top: 6vh;
    display: flex;    
    width: 1024px;
    background: white;
    min-height: 100vh;    
    box-sizing: border-box;    
`;

const Personal = () => {
    return (
        <Presentation>I am a person and saved stuff goes here. Right?  Right?!  Right?</Presentation>
    );
};

export default Personal;