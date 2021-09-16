import React from "react";
import { styled } from "../config/stitches.config";

import Container from "./Container";
import Article from "./Article";

function ContentWithImage({ title, descriptions, imgSrc, style }) {
  return (
    <ContentWithImageStyled css={style}>
      <Container>
        <ContentStyled>
          <Article
            css={{
              marginRight: "50px",
            }}
          >
            <h2>{title}</h2>
            {descriptions.map((description) => (
              <p key={description.id}>{description.text}</p>
            ))}
          </Article>

          <ImageWrap>
            <img src={imgSrc} alt="서비스_사진" />
          </ImageWrap>
        </ContentStyled>
      </Container>
    </ContentWithImageStyled>
  );
}

const ImageWrap = styled("div", {
  flex: 1,
  overflow: "hidden",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  "& img": {
    width: "100%",
  },
});

const ContentStyled = styled("div", {
  display: "flex",
  "@medium": {
    flexDirection: "column",
  },
});

const ContentWithImageStyled = styled("section", {
  padding: "50px 0",
});

export default ContentWithImage;
