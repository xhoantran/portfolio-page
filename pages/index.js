import dynamic from "next/dynamic";
import InitLoading from "../components/Loading/InitLoading";
const HomePage = dynamic(() => import("../components/LazyPage/HomePage"));

export default function LandingPage() {
  return (
    <>
      <InitLoading />
      <HomePage />
    </>
  );
}
