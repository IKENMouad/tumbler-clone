import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
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
  height: auto;
  max-width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
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
      {height != 50? (
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
      <Fragment>
        <ContentPanel id={id} type="top" author={user.name} />
        <Content>
          <img
            src={urls.regular}
            alt={alt_description}
            style={{ width: "100%", height: "auto" }}
          />
          )
        </Content>
        <ContentPanel id={id} type="bottom" score={likes} />
      </Fragment>
      )
    </ItemSection>
  );
};
export default ContentItem;
