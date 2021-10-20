import dynamic from "next/dynamic";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import "../styles/InitLoading.css";

const TopProgressBar = dynamic(
  () => {
    return import("../components/Loading/TopProgressBar");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
