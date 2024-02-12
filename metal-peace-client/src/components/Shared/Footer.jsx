import FooterBottom from "./FooterBottom";
import FooterCopyright from "./FooterCopyright";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="section pt-10 pb-20">
        <FooterTop />
        <FooterBottom />
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
