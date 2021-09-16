import React from "react";
import { styled } from "../config/stitches.config";

import Container from "../components/Container";

function Footer() {
  return (
    <FooterStyled>
      <Container>
        <FooterContent>
          <Description>
            <p>MY HAND TRANSLATOR</p>
            <p>
              내손 번역기는 개발 용어를 내가 원하는 단어로 치환하여 번역해주는 개발자용 번역기
              입니다.
            </p>
          </Description>
          <Navigator>
            <p>PRODUCT</p>
            <ul>
              <li>
                <a href="/#intro">Intro</a>
              </li>
              <li>
                <a href="/#feature">Feature</a>
              </li>
            </ul>
          </Navigator>
          <Navigator>
            <p>CONTACT US</p>
            <ul>
              <li>
                <a href="https://github.com/my-hand-translator/my-hand-translator-frontend">
                  Github
                </a>
              </li>
            </ul>
          </Navigator>
        </FooterContent>
      </Container>
    </FooterStyled>
  );
}

const Navigator = styled("div", {
  flex: 1,
  "& ul": {
    marginTop: "10px",
  },
  "& ul li": {
    marginBottom: "10px",
  },
  "& ul li a": {
    color: "#ffffff",
    textDecoration: "none",
  },
  "@medium": {
    marginBottom: "20px",
  },
});

const Description = styled("div", {
  flex: 4,
  "& p": {
    paddingBottom: "10px",
    width: "300px",
    wordBreak: "keep-all",
  },
  "@medium": {
    marginBottom: "20px",
  },
});

const FooterContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  "@medium": {
    flexDirection: "column",
  },
});

const FooterStyled = styled("footer", {
  paddingTop: "30px",
  paddingBottom: "30px",
  backgroundColor: "$gray",
  color: "#ffffff",
  "@medium": {
    flexDirection: "column",
  },
});

export default Footer;
