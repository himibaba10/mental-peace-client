import myPic from "../assets/my pic.jpg";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import "../App.css";
import { useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
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
      <FloatingWhatsApp
        accountName="Ferdous Ahmed"
        phoneNumber="+880 1813-240904"
        avatar={myPic}
        allowClickAway
        allowEsc
        notificationSound
      />
    </>
  );
};

export default Main;
