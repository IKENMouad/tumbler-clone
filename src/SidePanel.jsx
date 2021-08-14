import React from "react";
import styled from "styled-components";
import uuid from "uuid";
import data from "./data.json";
import Icon from "./Icon.jsx";
import { AdSection } from "./ContentItem.jsx";

const RootContainer = styled.div`
  display: block;
  margin-top: 2rem;
  flex-direction: column;
  width: 30%;
  font-family: Helvetica;
  font-size: 14px;
  @media (min-width: 1200px) {
    display: flex;
  }
`;

const Section = styled.div`
  width: 100%;
`;

const SectionContent = styled.div`
  margin: 0 auto;
  margin-bottom: 2vw;
`;

const SectionTitle = styled.div`
  border-bottom: 3px solid #00b8ff;
  font-weight: bold;
  padding-bottom: 1vh;
  margin-bottom: 1vh;
  color: white;
  font-family: "Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial,
    sans-serif;
`;

const ItemSubscribe = styled.div`
  color: #00b8ff;
  text-align: center;
  margin: 5px;
`;

const Item = styled.div`
  display: flex;
  padding: 0.5vw 0vw;
  justify-content: space-between;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:hover ${ItemSubscribe} {
    text-decoration: underline;
  }
`;
const ItemDetails = styled.div`
  display: flex;
`;

const ItemTextContainer = styled.div`
  padding-left: 1vh;
`;
const TextTitle = styled.div`
  font-weight: 600;
  color: white;
`;
const TextSubtitle = styled.div`
  font-size: 11px;
  color: white;
`;

export default ({}) => {
  return (
    <RootContainer>
      <Section>
        <SectionTitle> Check out these blogs </SectionTitle>
        <SectionContent>
          {data.data.slice(0, 5).map((item) => {
            return (
              <Item key={uuid.v4()}>
                <ItemDetails>
                  <Icon>{item.name[0]}</Icon>
                  <ItemTextContainer>
                    <TextTitle>{item.name}</TextTitle>
                    <TextSubtitle>{item.occupation}</TextSubtitle>
                  </ItemTextContainer>
                </ItemDetails>
                <ItemSubscribe>Follow</ItemSubscribe>
              </Item>
            );
          })}
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Radar</SectionTitle>
        <SectionContent>
          <AdSection
            author="Mouad"
            height="40"
            title="Ad TITLE that does stuff and stuff."
          />
        </SectionContent>
      </Section>
    </RootContainer>
  );
};
