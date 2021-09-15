import React from "react";

import { styled } from "../config/stitches.config";
import { GET_STARTED } from "../constants/url";

import Container from "../components/Container";
import Article from "../components/Article";
import Button from "../components/Button";
import ContentWithImage from "../components/ContentWithImage";

function App() {
  return (
    <main>
      <MainStyled id="intro">
        <Container>
          <HeroStyled>
            <h1>MY HAND TRANSLATOR</h1>
            <h2>기술 용어를 원하는 단어로 번역</h2>
            <ButtonWrap className="button-wrap">
              <Button to={GET_STARTED}>Get Started</Button>
              <Button to="/#">Download Now</Button>
            </ButtonWrap>
            <HeroImage>
              <img src="images/mock-img-1280.png" alt="서비스_사진" />
            </HeroImage>
          </HeroStyled>
        </Container>
      </MainStyled>

      <section id="feature" className="feature">
        <Container>
          <Article>
            <h1>Special Featured</h1>
            <p>
              [나만의 번역기] 구글 클라우드 번역 & 용어집을 이용해 자신만의 용어로 번역할 수 있다.
            </p>
            <p>드래그해서 번역할 수 있습니다</p>
            <p>확장 프로그램 버튼 눌러서 번역할 수 있습니다</p>
          </Article>
        </Container>
      </section>

      <ContentWithImage
        style={{
          backgroundColor: "#f7f9fa",
        }}
        title="서버 연동 시에 추가되는 기능들"
        descriptions={[
          { id: 1, text: "다른 사람 용어집 열람하고 자기 것에 적용할 수 있습니다" },
          { id: 2, text: "서버 DB를 이용해 API 요청을 아낄 수 있습니다" },
          { id: 3, text: "연동 이후에 글자 수 셀 수 있습니다" },
        ]}
      />
    </main>
  );
}

const HeroImage = styled("div", {
  display: "flex",
  borderRadius: "10px",
  marginBottom: "30px",
  overflow: "hidden",
  "& img": {
    width: "100%",
  },
});

const ButtonWrap = styled("div", {
  display: "flex",
  margin: "40px 0",
  "@medium": {
    flexDirection: "column",
  },
});

const HeroStyled = styled("section", {
  paddingTop: "50px",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& h1": {
    fontSize: "2.5em",
  },
  "& h2": {
    fontSize: "1.5em",
    margin: "15px 0",
  },
});

const MainStyled = styled("section", {
  marginBottom: "200px",
  maxHeight: "770px",
  backgroundColor: "$secondary",
  "@medium": {
    marginBottom: "50px",
  },
});

export default App;
