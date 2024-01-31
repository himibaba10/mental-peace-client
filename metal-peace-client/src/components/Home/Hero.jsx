import heroImg from "../../assets/hero image.jpg";
import PrimaryButton from "@/src/utils/PrimaryButton";

const Hero = () => {
  return (
    <section className="flex">
      <div className="w-[59%] bg-secondary relative flex flex-col justify-center p-10">
        <div className="w-[570px] ml-auto mr-28">
          <span className="text-base text-primary font-semibold tracking-widest uppercase">
            Transforming on an energetic level
          </span>
          <h1 className="text-[#716E6E] font-playfair text-6xl font-bold tracking-tight mt-2 mb-6 leading-tight">
            Welcome to The Peace Of Mind Way
          </h1>
          <p className="text-gray text-lg leading-8 mb-10">
            Do you feel like your time has come to let go and grow? A
            transformation process is intense: our soul is ready for inner
            growth, but our &quot;earthly self&quot; often finds this exciting
            and resists.
          </p>
          <PrimaryButton>More Information</PrimaryButton>
        </div>
      </div>
      <div className="w-[41%] bg-primary py-24">
        <div className="border-8 border-white border-l-0 inline-block -ml-28">
          <img
            className="h-[500px] p-12 relative drop-shadow-2xl"
            src={heroImg}
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
