import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import "../App.css";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
