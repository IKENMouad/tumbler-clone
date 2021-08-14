import React from "react";
import styled from "styled-components";
import Timeline from "./Timeline.jsx";
import SidePanel from "./SidePanel.jsx";

const Presentation = styled.div`
  display: flex;
  background: #001935;
  margin: 0 auto;

  @media (min-width: 450px) {
    width: 100%;
    min-width: 450px;
  }

  @media (min-width: 700px) {
    width: 100%;
    min-width: 700px;
  }

  @media (min-width: 1200px) {
    width: 1024px;
  }
`;



export default ({content}) => {
  return (
    <Presentation>
      <Timeline content={content} />
        <SidePanel />
    </Presentation>
  );
}