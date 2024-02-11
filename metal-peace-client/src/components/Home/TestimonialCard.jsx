import Paragraph from "@/src/utils/Paragraph";
import testimonialIcon from "../../assets/testimonial icon.png";

const TestimonialCard = ({ name, description }) => {
  return (
    <div className="bg-white">
      <div className="p-7 pb-2">
        <Paragraph>{description}</Paragraph>
      </div>
      <div className="bg-primary text-white flex justify-between items-center p-5">
        <h3 className="font-playfair text-4xl font-bold -translate-y-1">
          {name}
        </h3>
        <img className="w-12" src={testimonialIcon} alt="Testimonial Icon" />
      </div>
    </div>
  );
};

export default TestimonialCard;
