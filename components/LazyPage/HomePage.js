import styled from "@emotion/styled";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initLoaded } from "../../redux/action";
import SVGHome1 from "../Graph/SVGHome1";
import Header from "../Headers";

const ContentWrapper = styled.div`
  padding-top: 100px;
  margin: 0 5rem;
  @media (max-width: 1000px) {
    margin: 0 4rem;
  }
  @media (max-width: 756px) {
    margin: 0 3rem;
  }
  @media (max-width: 450px) {
    margin: 0 2rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
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
  const isInitLoading = useSelector((state) => state.global.isInitLoading);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(initLoaded());
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!isInitLoading && (
        <>
          <Header />
          <ContentWrapper>
            <ContentContainer>
              <TextContainer>
                <AttractText>Hoan Tran</AttractText>
                <AttractText>Software Engineer</AttractText>
                <AttractText>AI Engineer</AttractText>
                <SmallAttractText>
                  Welcome to my portfolio! I am an enginner that use my skills
                  to solve problem <StrongText>efficiency</StrongText>
                </SmallAttractText>
              </TextContainer>
              <GraphContainer>
                <SVGHome1 />
              </GraphContainer>
            </ContentContainer>
          </ContentWrapper>
        </>
      )}
    </>
  );
}
