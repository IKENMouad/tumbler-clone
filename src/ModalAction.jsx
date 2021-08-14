import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import ActionItem from './ActionItem.jsx';

const Background = styled.div`
  position: absolute;
  background: #001935;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  @media (min-width: 450px) {
    left: 73.2%;
    top: 13%;
  }
  @media (min-width: 1200px) {
    left: 61.1%;
    top: 12.4%;
  }
`;
   
const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  z-index: 10;
  border-radius: 10px;
  `;
  
  const ModalContent = styled.div`
  width: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

 const ModalAction = ({ id, showModal, setShowModal }) => {
   const modalRef = useRef();

   const animation = useSpring({
     config: {
       duration: 300,
     },
     opacity: showModal ? 1 : 0,
     transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
   });

   const closeModal = (e) => {
     setShowModal(false);
   };

   const keyPress = useCallback(
     (e) => {
       if (
         showModal &&
         (e.key === "Escape" || e.key === "ArrowDown" || e.key === "ArrowUp")
       ) {
         setShowModal(false);
       }
     },
     [setShowModal, showModal]
   );

   const getActionHandler = (event, { action }) => {
      switch (action) {
        case "created-at":
          break;

        case "copy-link":
          navigator.clipboard
            .writeText("Copy this text to clipboard")
          break;

        case "hide-post":
          break;
        case "report":
          break;
        case "block":
          break;
        case "close":
          closeModal(event);
          break;
        default:
          closeModal(event);
          break;
      }
   };

   useEffect(() => {
     document.addEventListener("keydown", keyPress);
     return () => document.removeEventListener("keydown", keyPress);
   }, [keyPress]);

   return (
     <div>
       {showModal ? (
         <Background onClick={closeModal} ref={modalRef}>
           <animated.div style={animation}>
             <ModalWrapper showModal={showModal}>
               <ModalContent>
                 <ActionItem
                   getActionHandler={(event, data) => getActionHandler(event, data)}
                   action="created-at"
                   label="Posted - Friday 5:33PM"
                   color="black"
                   hasButtom={true}
                 />
                 <div style={{ border: "1px ridge", width: "100%" }}></div>
                 <ActionItem
                   getActionHandler={(event, data) => getActionHandler(event, data)}
                   action="copy-link"
                   label="Copy link"
                   color="black"
                 />
                 <ActionItem
                   getActionHandler={(event, data) => getActionHandler(event, data)}
                   action="hide-post"
                   label="hide this post"
                   color="black"
                 />
                 <ActionItem
                   getActionHandler={(event, data) => getActionHandler(event, data)}
                   action="report"
                   label="Report"
                   color="red"
                 />
                 <ActionItem
                   getActionHandler={(event, data) => getActionHandler(event, data)}
                   action="block"
                   label="Block"
                   color="red"
                 />
                 <ActionItem
                   getActionHandler={(event, data) => getActionHandler(event, data)}
                   action="close"
                   label="Close"
                   color="red"
                 />
               </ModalContent>
             </ModalWrapper>
           </animated.div>
         </Background>
       ) : null}
     </div>
   );
 };

export default ModalAction;