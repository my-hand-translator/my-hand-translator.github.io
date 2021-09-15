import React from "react";

import Container from "../components/Container";
import { styled } from "../config/stitches.config";

function GetStartedPage() {
  return (
    <Main>
      <Container>
        <h1>GET STARTED</h1>

        <p>
          My Hand Translation는 사용자 개인의 Google Cloud Translation API를 이용합니다. 이는 Cloud
          Translation API가{" "}
          <a
            href="https://cloud.google.com/translate/pricing?hl=ko"
            target="_blank"
            rel="noreferrer"
          >
            월 50만자의 제한
          </a>
          이 있기 때문에 My Hand Translation 프로젝트의 장기적 유지를 위해 결정되었습니다. 따라서 My
          Hand Translation을 사용하기 위해서는{" "}
          <a href="https://cloud.google.com/" target="_blank" rel="noreferrer">
            구글 클라우드 플랫폼
          </a>{" "}
          회원 가입이 필요합니다.
        </p>
      </Container>

      <Container>
        <h2>회원 가입 후 사전준비 과정</h2>

        <ul>
          <li>
            <ListContainer>
              <p>1. 프로젝트 생성 하기</p>
              <img
                srcSet="images/getStarted/1_create_project_1200.png 1200w,
                  images/getStarted/1_create_project_768.png 768w"
                src="images/getStarted/1_create_project_1200.png"
                alt="1_create_project"
              />
            </ListContainer>
          </li>
          <li>
            <ListContainer>
              <p>
                2. API 및 서비스 - 대시보드 - 상단에 API 및 서비스 사용 및 설정 - Cloud Translation
                API 사용
              </p>
              <img
                srcSet="images/getStarted/2_1_create_api_1200.png 1200w,
                  images/getStarted/2_1_create_api_768.png 768w"
                src="images/getStarted/2_1_create_api_1200.png"
                alt="2_1_create_api"
              />
              <img
                srcSet="images/getStarted/2_2_use_api_1200.png 1200w,
                  images/getStarted/2_2_use_api_768.png 768w"
                src="images/getStarted/2_2_use_api_1200.png"
                alt="2_2_use_api"
              />
            </ListContainer>
          </li>
          <li>
            <ListContainer>
              <p>
                3. OAuth 동의 화면 구성 - 외부 선택 - 앱 이름과, 사용자 지원 이메일, 개발자 연락처
                정보 입력
              </p>
              <img
                srcSet="images/getStarted/3_1_create_OAuth_1200.png 1200w,
                  images/getStarted/3_1_create_OAuth_768.png 768w"
                src="images/getStarted/3_1_create_OAuth_1200.png"
                alt="3_1_create_OAuth"
              />
              <img
                srcSet="images/getStarted/3_2_create_OAuth_1200.png 1200w,
                  images/getStarted/3_2_create_OAuth_768.png 768w"
                src="images/getStarted/3_2_create_OAuth_1200.png"
                alt="3_2_create_OAuth"
              />
              <img
                srcSet="images/getStarted/3_3_create_OAuth_1200.png 1200w,
                  images/getStarted/3_3_create_OAuth_768.png 768w"
                src="images/getStarted/3_3_create_OAuth_1200.png"
                alt="3_3_create_OAuth"
              />
              <ListContainer
                css={{
                  wordBreak: "break-all",
                }}
              >
                <p>
                  - 승인된 리디렉션 URI에 https://ebkndhbalobmkeeajcpcgolcmklomoca.chromiumapp.org
                  입력
                </p>
                <img
                  srcSet="images/getStarted/3_4_create_OAuth_1200.png 1200w,
                  images/getStarted/3_4_create_OAuth_768.png 768w"
                  src="images/getStarted/3_4_create_OAuth_1200.png"
                  alt="3_4_create_OAuth"
                />
              </ListContainer>
              <ListContainer>
                <p>- OAuth 동의 화면에서 앱 게시 클릭 </p>
                <img
                  srcSet="images/getStarted/3_5_create_OAuth_1200.png 1200w,
                  images/getStarted/3_5_create_OAuth_768.png 768w"
                  src="images/getStarted/3_5_create_OAuth_1200.png"
                  alt="3_5_create_OAuth"
                />
              </ListContainer>
              <ListContainer>
                <p> - 클라이언트 ID JSON파일 다운로드 </p>
                <img
                  srcSet="images/getStarted/3_6_create_OAuth_1200.png 1200w,
                  images/getStarted/3_6_create_OAuth_768.png 768w"
                  src="images/getStarted/3_6_create_OAuth_1200.png"
                  alt="3_6_create_OAuth"
                />
              </ListContainer>
            </ListContainer>
          </li>
          <li>
            <ListContainer>
              <p>
                4. 다운로드 받은 JSON파일에서 client_id, project_id, client_secret, redirect_url을
                입력합니다.
              </p>

              <ListContainer>
                <p>- Google 로그인 후 권한 동의를 합니다.</p>
              </ListContainer>
            </ListContainer>
          </li>
          <li />
          <li />
        </ul>
      </Container>
    </Main>
  );
}

const ListContainer = styled("section", {
  margin: "1em",

  "& img": {
    width: "60%",
    marginBottom: "1em",
    display: "block",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",

    "@medium": {
      width: "100%",
    },
  },
});

const Main = styled("main", {
  fontSize: "20px",
  lineHeight: 1.5,

  "& h1": {
    margin: "1em 0",
    fontSize: "1.5em",
    fontWeight: 600,
  },

  "& h2": {
    margin: "1em 0",
    fontSize: "1.2em",
    fontWeight: 600,
  },

  "@medium": {
    fontSize: "15px",

    "& h1": {
      fontSize: "1.3em",
      marginTop: "0",
    },
  },
});

export default GetStartedPage;
