import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon.jsx";
import ContentPanel from "./ContentPanel.jsx";
import Photo from "./Photo.jsx";
import axios from "axios";

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
  max-width: 69.4vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const AdSection = ({ id, user, likes, urls, alt_description,height = 50 }) => {
  const AdSection = ItemSection.extend`
    box-shadow: 0px 0px 0px white;
  `;
  const ContentOverride = Content.extend`
    height: ${height}vh;
  `;

  return (
    <AdSection>
      <ContentPanel id={id} type="top" author="mouad" />
      {height ? (
        <ContentOverride> {alt_description} </ContentOverride>
      ) : (
        <Content>{alt_description}</Content>
      )}
      <ContentPanel id={id} type="bottom" score="1234" />
    </AdSection>
  );
};

export { AdSection };


// const ContentItem = ({ id, author, title, score, image }) => {
//   return (
//     <ItemSection>
//       <ContentPanel id={id} type="top" author={author} />
//       <Content>
//         <img
//           src={image[0].url}
//           alt={title}
//           style={{ width: "69.4vh", height: "50vh" }}
//         />
//       </Content>
//       <ContentPanel id={id} type="bottom" score={score} />
//     </ItemSection>
//   );
// };

const ContentItem = ({ id, user, likes, urls, alt_description }) => {
  return (
    <ItemSection>
      {id ? (
        <Fragment>
          <ContentPanel id={id} type="top" author={user.name} />
          <Content>
            <img
              src={urls.regular}
              alt={alt_description}
              style={{ width: "69.4vh", height: "50vh" }}
            />
          </Content>
          <ContentPanel id={id} type="bottom" score={likes} />
        </Fragment>
      ) : (
        "loading...  " + id
      )}
    </ItemSection>
  );
};
export default ContentItem;
