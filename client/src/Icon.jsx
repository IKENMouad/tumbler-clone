import React from "react";
import styled from "styled-components";

export default ({
  background = "#343434",
  color = "white",
  size = "2vw",
  children,
}) => {
  const Icon = styled.div`
    height: ${size};
    width: ${size};
    background: ${background};
    color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <Icon>{children}</Icon>;
};