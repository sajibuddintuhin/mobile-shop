import { Outlet } from "react-router-dom";
import NabBar from "./components/pages/sherd/NabBar";
import Footer from "./components/pages/sherd/Footer";

const Root = () => {
  return (
    <div>
      <NabBar></NabBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
