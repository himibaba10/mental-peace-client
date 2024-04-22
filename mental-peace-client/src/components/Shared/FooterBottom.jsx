import { Link } from "react-router-dom";
import FooterLinkHeader from "./FooterLinkHeader";
import FooterLinks from "./FooterLinks";

const FooterBottom = () => {
  return (
    <div className="border-t border-t-slate-400 mt-10 pt-7 flex justify-between">
      <div>
        <FooterLinkHeader>Know More</FooterLinkHeader>
        <FooterLinks>
          <li>
            <Link to="/sessions">Sessions</Link>
          </li>
          <li>
            <Link to="/client-experiences">Client Experiences</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </FooterLinks>
      </div>
      <div>
        <FooterLinkHeader>Interesting Subjects</FooterLinkHeader>
        <FooterLinks>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </FooterLinks>
      </div>
      <div className="w-1/3">
        <FooterLinkHeader>Contact Info</FooterLinkHeader>
        <address className="not-italic">
          <FooterLinks>
            <p>
              <span className="font-bold">Location:</span> Melartek, Kaundia,
              Savar, Dhaka
            </p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              <a href="mailto:himibaba10@gmail.com">himibaba10@gmail.com</a>
            </p>
            <p>
              <span className="font-bold">Phone:</span>{" "}
              <a href="tel:+8801997722621">+880-199-772-2621</a>
            </p>
          </FooterLinks>
        </address>
      </div>
    </div>
  );
};

export default FooterBottom;
