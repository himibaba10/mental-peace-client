import SecondaryButton from "@/src/utils/SecondaryButton";
import Heading from "../Shared/Heading";
import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  return (
    <section className="bg-secondary my-20 py-20">
      <div className="section">
        <Heading title="Clients and experiences" subTitle="What Clients Say" />
        <TestimonialCards />
        <div className="text-center mt-16">
          <SecondaryButton>View all experiences</SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
