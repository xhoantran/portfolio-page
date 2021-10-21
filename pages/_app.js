import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
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
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Provider store={store}>
        <TopProgressBar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
