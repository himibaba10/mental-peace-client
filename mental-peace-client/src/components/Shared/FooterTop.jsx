import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";

const FooterTop = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-4xl font-bold">Mental Peace</h2>
      <div className="space-x-2">
        <SocialIcon>
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon>
          <FaTwitter />
        </SocialIcon>
        <SocialIcon>
          <FaLinkedinIn />
        </SocialIcon>
        <SocialIcon>
          <FaInstagram />
        </SocialIcon>
      </div>
    </div>
  );
};

export default FooterTop;
