import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import "../App.css";
import { useEffect } from "react";
const Main = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);
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
