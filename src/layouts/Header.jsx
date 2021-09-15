import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "../config/stitches.config";

import Container from "../components/Container";
import { GET_STARTED } from "../constants/url";

function Header() {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <HeaderStyled
      css={{
        backgroundColor: pathname === GET_STARTED && "$white",
      }}
    >
      <Container>
        <HeaderContent
          className="header-content"
          css={{
            color: pathname === GET_STARTED ? "$black" : "$white",
          }}
        >
          <div className="logo">
            <Link to="/">My Hand Translation</Link>
          </div>
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
});

const HeaderContent = styled("div", {
  display: "flex",
  height: "60px",
  alignItems: "center",
  justifyContent: "space-between",

  "& a": {
    marginLeft: "10px",
    marginRight: "10px",
    textDecoration: "none",
    color: "inherit",
  },
});

const HeaderStyled = styled("header", {
  backgroundColor: "$lightBlue",
  color: "#ffffff",
});

export default Header;
