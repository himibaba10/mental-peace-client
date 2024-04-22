import HeroImage from "./HeroImage";
import HeroInfo from "./HeroInfo";

const Hero = () => {
  return (
    <section className="flex">
      <HeroInfo />
      <HeroImage />
    </section>
  );
};

export default Hero;
