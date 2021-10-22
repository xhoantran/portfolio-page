import styled from "@emotion/styled";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initLoaded } from "../../redux/action";
import {
  BPLarge,
  BPMedium,
  BPMiddle,
  BPSmall,
  BreakPoints,
} from "../BreakPoints";
import SVGHome1 from "../Graph/SVGHome1";
import Header from "../Headers";
import Link from "next/link";

const ContentWrapper = styled.div`
  padding-top: 200px;
  margin: 0 9rem;
  @media (max-width: ${BPLarge}) {
    margin: 0 7rem;
  }
  @media (max-width: ${BPMedium}) {
    margin: 0 4rem;
    padding-top: 170px;
  }
  @media (max-width: ${BPSmall}) {
    margin: 0 3rem;
    padding-top: 100px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;

  @media (max-width: ${BPMiddle}) {
    flex-direction: column-reverse;
  }
`;
const TextContainer = styled.div`
  max-width: 480px;
  @media (max-width: ${BPLarge}) {
    max-width: 350px;
  }
  @media (max-width: ${BPMedium}) {
    max-width: 480px;
  }
`;
const AttractText = styled.div`
  font-weigth: 500;
  font-size: 36px;

  @media (max-width: ${BPMedium}) {
    font-size: 32px;
  }
  @media (max-width: ${BreakPoints}) {
    font-size: 28px;
  }
`;
const SmallAttractText = styled.div`
  font-weight: 400;
  font-size: 18px;

  @media (max-width: ${BPMedium}) {
    font-size: 16px;
  }
`;
const StrongText = styled.div`
  display: inline-block;
  font-weight: bold;
`;
const GraphContainer = styled.div`
  width: 524px;
  height: 340px;

  @media (max-width: ${BPLarge}) {
    max-width: 400px;
    max-height: 250px;
  }
  @media (max-width: ${BPMiddle}) {
    margin: 0 auto;
    max-width: 350px;
    max-height: 200px;
  }
  @media (max-width: ${BPSmall}) {
    margin: 0 auto;
    max-width: 280px;
  }
`;

const ContactMeButton = styled.a`
  margin-top: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background: #001219;
  border-radius: 50px;
  width: 150px;
  height: 42px;
  color: #ffffff;
  cursor: pointer;
`;

export default function HomePage() {
  const isInitLoading = useSelector((state) => state.global.isInitLoading);
  const dispath = useDispatch();

  useEffect(() => {
    if (isInitLoading) dispath(initLoaded());
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
                <Link href="/contact">
                  <ContactMeButton>Contact me</ContactMeButton>
                </Link>
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
