import learningImg from "../../assets/Learning.jpg";
import SecondaryButton from "@/src/utils/SecondaryButton";

const Learning = () => {
  return (
    <div className="section flex gap-28 my-28">
      <div className="w-1/2">
        <div className="flex justify-center relative">
          <img
            className="w-5/6 relative z-10 drop-shadow-2xl"
            src={learningImg}
            alt="Image of girl throwing sand"
          />
          <div className="absolute -top-8 right-3 w-5/6 h-full bg-secondary"></div>
        </div>
      </div>
      <div className="w-1/2">
        <span className="text-base text-primary font-semibold tracking-widest uppercase">
          Learning to let go
        </span>
        <h2 className="capitalize text-black font-playfair text-5xl font-bold pt-3 pb-8 leading-tight">
          Letting go is the key to liberation.
        </h2>
        <p className="text-lg leading-8">
          Het zand in deze foto staat symbool voor los laten: Van angsten,
          onverwerkte emoties, twijfels, controle en overtuigingen. Daarmee
          ontstaat er ruimte voor liefde: voor jezelf en de ander.
        </p>
        <h3 className="capitalize text-primary font-playfair text-3xl font-bold mt-10 pb-8 leading-tight">
          Discover that reality as we know it is only a fraction of the entire
          reality.
        </h3>
        <SecondaryButton>Blog about this photo</SecondaryButton>
      </div>
    </div>
  );
};

export default Learning;
