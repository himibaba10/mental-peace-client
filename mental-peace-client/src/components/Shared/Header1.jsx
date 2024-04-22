// Images
import logo from "../../assets/Logo.png";

const Header1 = () => {
  return (
    <div className="bg-primary text-white py-3">
      <div className="section flex justify-between items-center">
        <img className="mr-5" src={logo} alt="Website logo" />
        <span className="font-extrabold text-sm">
          I.v.m. wachttijd is er vanaf november weer ruimte om een eerste sessie
          te plannen.
        </span>
        <div className="text-xs font-semibold">
          <a href="mailto:himibaba10@gmail.com">himibaba10@gmail.com</a>
          <a className="ml-3" href="tel:+8801997722621">
            +880-1997722621
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header1;
