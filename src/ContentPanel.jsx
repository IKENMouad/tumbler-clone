import React from "react";
import styled from "styled-components";
import Icon from "./Icon.jsx";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Header = styled.div`
  margin: 3.2vh;
  display: flex;
  justify-content: space-between;
`;

const HeaderDetails = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 13px;
`;

const HeaderActionsButton = styled.div`
  display: flex;
`;

const HeaderActionsTop = styled.div`
  display: flex;
`;

const HeaderActionsItem = styled.div`
  color: #00b8ff;
  height: 1vw;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5vw;
  margin-left: 1vw;
  &:hover {
    text-decoration: underline;
  }
`;

const BottomActionItem = styled.div`
  margin: 0;
  color: #000000a6;
  font-family: "Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial,
    sans-serif;
  cursor: pointer;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2vh;
`;

const CornerButton = styled(Icon)`
  margin-left: 2vw;
  font-size: 5px;
`;

export default ({ type, author, score }) => {
  if (type === "bottom") {
    return (
      <div>
        <Actions>
          <HeaderDetails>
            <BottomActionItem>{score} notes </BottomActionItem>
          </HeaderDetails>
          <HeaderActionsButton>
            <FaRegCommentDots
              style={{
                margin: "0 10px",
                fontSize: "24px",
                cursor: "pointer",
              }}
            />
            <FaRegShareSquare
              style={{
                margin: "0 10px",
                fontSize: "24px",
                cursor: "pointer",
              }}
            />
            <FaRegHeart
              style={{
                margin: "0 0 0 10px ",
                fontSize: "24px",
                cursor: "pointer",
              }}
            />
          </HeaderActionsButton>
        </Actions>
      </div>
    );
  } else {
    return (
      <div>
        <Header>
          <HeaderDetails>
            {author}
            <HeaderActionsItem>Follow</HeaderActionsItem>
          </HeaderDetails>
          <HeaderActionsTop>
            <BsThreeDots style={{ cursor: "pointer", fontSize: "16px" }} />
          </HeaderActionsTop>
        </Header>
      </div>
    );
  }
};
