import React, { Fragment, useState }  from "react";
import styled from "styled-components";
import Icon from "./Icon.jsx";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import ModalAction from "./ModalAction.jsx";

const Header = styled.div`
  margin: 3.2vh;
  display: flex;
  justify-content: space-between;
`;

const HeaderDetails = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 13px;
  @media (min-width: 450px) {
    font-size: 25px;
  }
`;

const HeaderActionsButton = styled.div`
  display: flex;
`;

const HeaderActionsTop = styled.div`
  display: flex;
`;

const HeaderActionsItem = styled.div`
  color: #00B8ff;
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

 

export default ({ id, type, author, score }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  if (type === "top") {
    return (
      <Header>
        {id && (
          <Fragment>
            <HeaderDetails>
              {author}
              <HeaderActionsItem>Follow</HeaderActionsItem>
            </HeaderDetails>
            <HeaderActionsTop>
              <BsThreeDots
                style={{
                  cursor: "pointer",
                  fontSize: "16px",
                  position: "relative",
                }}
                onClick={() => openModal(id)}
              />
              <ModalAction
                gif
                id={id}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </HeaderActionsTop>
          </Fragment>
        )}
      </Header>
    );
  } else {
    return (
      <Actions>
        {id && (
          <Fragment>
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
          </Fragment>
        )}
      </Actions>
    );
  }
};
