import React from "react";
import { styled } from "../config/stitches.config";

function Container({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}

const ContainerStyled = styled("div", {
  maxWidth: "1200px",
  margin: "auto",
  paddingLeft: "30px",
  paddingRight: "30px",
});

export default Container;
