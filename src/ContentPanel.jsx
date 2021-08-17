import React, { Fragment, useState }  from "react";
import styled from "styled-components";
import Icon from "./Icon.jsx";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import ModalAction from "./ModalAction.jsx";

const Header = styled.div`
  margin: 2vh;
  display: flex;
  justify-content: space-between;
  background-color: white;
  `;
  
const HeaderDetails = styled.div`
    display: flex;
    cursor: pointer;
    font-size: 13px;
    background-color: white;
  `;
  
const HeaderActionsButton = styled.div`
  background-color: white;
  display: flex;
`;

const HeaderActionsTop = styled.div`
  display: flex;
  background-color: white;
`;

const HeaderActionsItem = styled.div`
  color: #00B8ff;
  height: 1vw;
  background-color: white;
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
  background-color: white;
  font-family: "Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial,
    sans-serif;
  cursor: pointer;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2vh;
  background-color: white;
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
                  backgroundColor:'white'
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
      <Actions className="actions" > 
        {id && (
          <Fragment>
            <HeaderDetails>
              <BottomActionItem>{score} notes</BottomActionItem>
            </HeaderDetails>
            <HeaderActionsButton>
              <FaRegCommentDots
                style={{
                  margin: "0 10px",
                  fontSize: "24px",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
              />
              <FaRegShareSquare
                style={{
                  margin: "0 10px",
                  fontSize: "24px",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
              />
              <FaRegHeart
                style={{
                  margin: "0 0 0 10px",
                  fontSize: "24px",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
              />
            </HeaderActionsButton>
          </Fragment>
        )}
      </Actions>
    );
  }
};
