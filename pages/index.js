import Head from "next/head";
import styled from "@emotion/styled";

import Header from "../components/Headers";
import SVGHome1 from "../components/SVG/SVGHome1";

const ContentWrapper = styled.div`
  margin: 180px 125px 0 125px;
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

const GraphContainer = styled.div``;

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
    </div>
  );
}
