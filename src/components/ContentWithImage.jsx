import React from "react";
import { styled } from "../config/stitches.config";

import Container from "./Container";
import Article from "./Article";

function ContentWithImage({ title, descriptions, style }) {
  return (
    <ContentWithImageStyled css={style}>
      <Container>
        <ContentStyled>
          <Article>
            <h1>{title}</h1>
            {descriptions.map(description => <p key={description.id}>{description.text}</p>)}
          </Article>

          <ImageWrap>
            <img src="images/mock-img-1280.png" alt="서비스_사진" />
          </ImageWrap>
        </ContentStyled>
      </Container>
    </ContentWithImageStyled>
  );
}

const ImageWrap = styled("div", {
  flex: 1,
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
