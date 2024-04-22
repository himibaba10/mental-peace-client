import heroImg from "../../assets/hero image.jpg";

const HeroImage = () => {
  return (
    <div className="w-[41%] bg-primary py-24">
      <div className="border-8 border-white border-l-0 inline-block -ml-28">
        <img
          className="h-[500px] p-12 relative drop-shadow-2xl"
          src={heroImg}
          alt="Hero image"
        />
      </div>
    </div>
  );
};

export default HeroImage;
