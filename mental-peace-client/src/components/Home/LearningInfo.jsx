import Paragraph from "@/src/utils/Paragraph";
import Heading from "../Shared/Heading";
import SecondaryButton from "@/src/utils/SecondaryButton";

const LearningInfo = () => {
  return (
    <div className="w-1/2">
      <Heading
        title="Letting go is the key to liberation."
        subTitle="Learning to let go"
        align="left"
      />
      <Paragraph color="#141414">
        Het zand in deze foto staat symbool voor los laten: Van angsten,
        onverwerkte emoties, twijfels, controle en overtuigingen. Daarmee
        ontstaat er ruimte voor liefde: voor jezelf en de ander.
      </Paragraph>
      <h3 className="capitalize text-primary font-playfair text-3xl font-bold mt-10 pb-8 leading-tight">
        Discover that reality as we know it is only a fraction of the entire
        reality.
      </h3>
      <SecondaryButton>Blog about this photo</SecondaryButton>
    </div>
  );
};

export default LearningInfo;
