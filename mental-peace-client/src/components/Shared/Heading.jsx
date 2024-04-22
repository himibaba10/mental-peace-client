import HeadingText from "./HeadingText";
import Subheading from "./Subheading";

const Heading = ({
  title,
  subTitle,
  align = "center",
  color = "text-black",
  size = "text-5xl",
}) => {
  return (
    <div style={{ textAlign: align }}>
      <Subheading subTitle={subTitle} />
      <HeadingText size={size} color={color} title={title} />
    </div>
  );
};

export default Heading;
