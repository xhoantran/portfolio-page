import Head from "next/head";
import styled from "@emotion/styled";

import Header from "../components/Headers";

const ContentContainer = styled.div`
  margin: 28px 125px 0 125px;
`;

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <ContentContainer></ContentContainer>
    </div>
  );
}
