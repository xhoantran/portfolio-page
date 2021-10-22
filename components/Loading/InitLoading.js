import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MobileLogo = dynamic(() =>
  import("../Graph/Loading").then((mod) => mod.MobileLogo)
);
const DesktopLogo = dynamic(() =>
  import("../Graph/Loading").then((mod) => mod.DesktopLogo)
);
const BackgroundLogo = styled.div`
  background: #001219;
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;

export default function InitLoading() {
  const isInitLoading = useSelector((state) => state.global.isInitLoading);
  const [visible, setVisible] = useState(isInitLoading);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== undefined) {
      setWindowWidth(window.innerWidth);
    }
    setTimeout(() => setVisible(false), 6000);
  }, []);

  return (
    <>
      {(visible || isInitLoading) && (
        <BackgroundLogo>
          {windowWidth < 600 ? <MobileLogo /> : <DesktopLogo />}
        </BackgroundLogo>
      )}
    </>
  );
}
