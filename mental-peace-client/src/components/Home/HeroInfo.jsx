import Paragraph from "@/src/utils/Paragraph";
import PrimaryButton from "@/src/utils/PrimaryButton";
import Heading from "../Shared/Heading";

const HeroInfo = () => {
  return (
    <div className="w-[59%] bg-secondary relative flex flex-col justify-center p-10">
      <div className="w-[570px] ml-auto mr-28">
        <Heading
          subTitle="Transforming on an energetic level"
          title="Welcome to The Peace Of Mind Way"
          align="left"
          size="text-6xl"
          color="text-[#716E6E]"
        />
        <Paragraph>
          Do you feel like your time has come to let go and grow? A
          transformation process is intense: our soul is ready for inner growth,
          but our &quot;earthly self&quot; often finds this exciting and
          resists.
        </Paragraph>
        <PrimaryButton>More Information</PrimaryButton>
      </div>
    </div>
  );
};

export default HeroInfo;
