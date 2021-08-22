import { useRef } from "react";
import ReactCircleModal from "react-circle-modal";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const RightChat = ({ label = "default label", photos, from }) => {
  const ref = useRef("");
  return (
    <ReactCircleModal
      backgroundColor="#53555fe6"
      ref={ref}
      toogleComponent={(onClick) => (
        <span
          style={{ color: "#00b8ff", cursor: "pointer" }}
          onClick={onClick}
          className="btn btn-link "
        >
          {label}
        </span>
      )}
      offsetX={670}
      offsetY={0}
    >
      {(onClick) => (
        <Container>
          <div
            style={{
              cursor: "pointer",
              textAlign: "right",
              position: "relative",
            }}
            className="close-modal"
            onClick={onClick}
          >
            <AiOutlineClose
              style={{
                position: "fixed",
                right: "1rem",
                fontSize: "40px",
                cursor: "pointer",
                color: "white",
              }}
            />
          </div>
          <div className="row">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            possimus?
          </div>
        </Container>
      )}
    </ReactCircleModal>
  );
};
  export default RightChat;
  
  const Container = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
  `;
  