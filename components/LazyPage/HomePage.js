import Head from "next/head";
import styled from "@emotion/styled";

import Header from "../Headers";
import SVGHome1 from "../Graph/SVGHome1";

const Wrapper = styled.div`
  margin: 0 5rem;
  @media (max-width: 756px) {
    margin: 0 3rem;
  }
  @media (max-width: 756px) {
    margin: 0 1rem;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 180px;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  margin-left: 4rem;
  max-width: 480px;
`;

const AttractText = styled.div`
  font-weigth: 500;
  font-size: 36px;
`;

const SmallAttractText = styled.div`
  font-weight: 400;
  font-size: 18px;
`;

const StrongText = styled.div`
  display: inline-block;
  font-weight: bold;
`;

const GraphContainer = styled.div`
  overflow: hidden;
`;

export default function HomePage() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wrapper>
        <Header />
        <ContentWrapper>
          <ContentContainer>
            <TextContainer>
              <AttractText>Hoan Tran</AttractText>
              <AttractText>Software Engineer</AttractText>
              <AttractText>AI Engineer</AttractText>
              <SmallAttractText>
                Welcome to my portfolio! I am an enginner that use my skills to
                solve problem <StrongText>efficiency</StrongText>
              </SmallAttractText>
            </TextContainer>
            <GraphContainer>
              <SVGHome1 />
            </GraphContainer>
          </ContentContainer>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}
