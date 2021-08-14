import React from "react";
import styled from "styled-components";
import Icon from "./Icon.jsx";
import ContentPanel from "./ContentPanel.jsx";

const ItemSection = styled.div`
  margin-bottom: 2vh;
  margin-top: 3vh;
  background: white;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  font-family: Helvetica;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  background: lavender;
  height: 50vh; 
  display: flex;
  align-items: center;
  font-size: 20px;
  box-sizing: border-box;
`;


const AdSection = ({ id, title, author, height = 50 }) => {
  const AdSection = ItemSection.extend`
    box-shadow: 0px 0px 0px white;
  `;
  const ContentOverride = Content.extend`
    height: ${height}vh;
  `;

  return (
    <AdSection>
      <ContentPanel id={id} type="top" author={author} />
      {height ? (
        <ContentOverride> {title} </ContentOverride>
      ) : (
        <Content>{title}</Content>
      )}
      <ContentPanel id={id} type="bottom" score="1234" />
    </AdSection>
  );
};

export { AdSection };

export default ({ id, author, title, score, image, gif, video }) => {
  return (
    <ItemSection>
      <ContentPanel id={id} type="top" author={author} />
      <Content>
        {/* {JSON.stringify(image)} */}
        <img
          src={image[0].url}
          alt={image[0].url}
          style={{ height: "50vh", width: "70vh" }}
        />
      </Content>
      <ContentPanel id={id} type="bottom" score={score} />
    </ItemSection>
  );
};