import Paragraph from "@/src/utils/Paragraph";
import Heading from "../Shared/Heading";

const About = () => {
  return (
    <div className="section !max-w-4xl my-20 flex items-center">
      <div className="w-1/6 h-80 bg-secondary"></div>
      <div className="bg-secondary p-16 w-5/6">
        <Heading
          title="TRANSFORMING ON AN ENERGETIC LEVEL"
          subTitle="Welcome to The Peace Of Mind Way"
          align="left"
        />
        <Paragraph color="text-[#141414]">
          Do you feel like your time has come to let go and grow? A
          transformation process is intense: our soul is ready for inner growth,
          but our &quot;earthly self&quot; often finds this exciting and
          resists.
          <br />
          <br />
          In Gnostic sessions the universe lovingly guides you in this process.
          You experience at soul level where the blockages are located and when
          they originated. After these insights you are ready to let them go.
          You come into contact with a greater reality in a way you have never
          experienced before. You will receive the information that you can
          handle and that is important at the moment.
          <br />
          <br />
          The universe allows you to experience your strength and inner light.
          This way of working has given me a deep respect for the wonders of the
          universe.
        </Paragraph>
      </div>
    </div>
  );
};

export default About;
