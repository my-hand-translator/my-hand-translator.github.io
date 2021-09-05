import React from "react";
import { styled } from "../config/stitches.config";

import Container from "../components/Container";

function Header() {
  return (
    <HeaderStyled>
      <Container>
        <HeaderContent className="header-content">
          <div className="logo">My Hand</div>
          <Nav>
            <a href="/#intro">intro</a>
            <a href="/#feature">Feature</a>
          </Nav>
        </HeaderContent>
      </Container>
    </HeaderStyled>
  );
}

const Nav = styled("nav", {
  "@medium": {
    display: "none",
  },
  "& a": {
    marginLeft: "10px",
    marginRight: "10px",
    color: "#ffffff",
    textDecoration: "none",
  },
});

const HeaderContent = styled("div", {
  display: "flex",
  height: "60px",
  alignItems: "center",
  justifyContent: "space-between",
});

const HeaderStyled = styled("header", {
  backgroundColor: "$secondary",
  color: "#ffffff",
});

export default Header;
