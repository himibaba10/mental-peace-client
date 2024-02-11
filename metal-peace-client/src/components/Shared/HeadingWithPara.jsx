import Paragraph from "@/src/utils/Paragraph";
import Heading from "./Heading";

const HeadingWithPara = ({ subTitle, title, para, size }) => {
  return (
    <section className="section">
      <Heading size={size} subTitle={subTitle} title={title} />
      <div className="px-32">
        <Paragraph>{para}</Paragraph>
      </div>
    </section>
  );
};

export default HeadingWithPara;
